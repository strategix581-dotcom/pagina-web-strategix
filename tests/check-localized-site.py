"""Run against a built server: python3 tests/check-localized-site.py [base URL]."""
import json, sys, urllib.request, urllib.error, urllib.parse
from html.parser import HTMLParser
from pathlib import Path

class Redirects(urllib.request.HTTPRedirectHandler):
 http_error_308 = urllib.request.HTTPRedirectHandler.http_error_302
 def redirect_request(self, req, fp, code, msg, headers, newurl):
  return super().redirect_request(req, fp, 301 if code == 308 else code, msg, headers, newurl)
urllib.request.install_opener(urllib.request.build_opener(Redirects))

base = sys.argv[1] if len(sys.argv)>1 else 'http://127.0.0.1:3080'
copy = json.loads((Path(__file__).resolve().parents[1]/'lib/seo-copy.json').read_text())
class Page(HTMLParser):
 def __init__(self):
  super().__init__();self.lang=None;self.meta={};self.links=[];self.anchors=[];self.titles=[];self.in_title=False
 def handle_starttag(self, tag, attrs):
  a=dict(attrs)
  if tag=='html':self.lang=a.get('lang')
  if tag=='meta':self.meta[a.get('name',a.get('property'))]=a.get('content')
  if tag=='link':self.links.append(a)
  if tag=='a':self.anchors.append(a.get('href',''))
  if tag=='title':self.in_title=True
 def handle_endtag(self,tag):
  if tag=='title':self.in_title=False
 def handle_data(self,data):
  if self.in_title:self.titles.append(data)
def url(path,locale):
 return ('' if locale=='es' else '/'+locale)+(path if path!='/' or locale=='es' else '')
count=0
for path in copy:
 for locale in ('es','en','pap'):
  public=url(path,locale)
  with urllib.request.urlopen(base+public) as r:
   assert r.status==200,public
   body=r.read().decode()
  p=Page();p.feed(body)
  assert p.lang==locale,(public,p.lang)
  assert ''.join(p.titles)==copy[path][locale]['title'],public
  assert p.meta['description']==copy[path][locale]['description'],public
  assert p.meta['og:title']==copy[path][locale]['title'],public
  assert p.meta['twitter:card']=='summary_large_image',public
  assert [x['href'].rstrip('/') for x in p.links if x.get('rel')=='canonical']==[('https://strategixcuracao.com'+public).rstrip('/')],public
  alternatives={x.get('hreflang'):x.get('href') for x in p.links if x.get('rel')=='alternate'}
  for lang in ('es','en','pap'):
   assert alternatives[lang].rstrip('/')==('https://strategixcuracao.com'+url(path,lang)).rstrip('/'),public
  for href in p.anchors:
   if href.startswith('/') and not href.startswith('//'):
    assert (not href.startswith(('/en','/pap','/es')) if locale=='es' else href.startswith('/'+locale)),(public,href)
   if href.startswith('https://wa.me/') and 'text=' in href:
    message=urllib.parse.parse_qs(urllib.parse.urlsplit(href).query)['text'][0]
    assert message.startswith({'es':'Hola,','en':'Hi,','pap':'Bon dia,'}[locale]),(public,message)
  assert 'application/ld+json' in body,public
  count+=1
for path in ('/healthcare','/en/healthcare','/pap/healthcare'):
 with urllib.request.urlopen(base+path) as r:
  assert r.status==200
  expected=path.replace('healthcare','clinics').replace('/es/','/')
  assert urllib.parse.urlsplit(r.url).path==expected,(path,r.url)
with urllib.request.urlopen(base+'/sitemap.xml') as r:
 sitemap=r.read().decode();assert sitemap.count('<loc>')==33
with urllib.request.urlopen(base+'/share-image.png') as r:
 assert r.headers.get('Content-Type').startswith('image/png')
 assert r.read()[:8]==b'\x89PNG\r\n\x1a\n'
try:urllib.request.urlopen(base+'/en/not-a-real-page')
except urllib.error.HTTPError as e:assert e.code==404
else:raise AssertionError('Missing page did not return 404')
print(f'PASS: {count} localized pages, metadata, canonical/alternate URLs, internal links, WhatsApp languages, redirects, sitemap, share image and 404.')
