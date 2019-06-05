gsutil -m rsync -r -d "../dist" gs://two-baldies-staging

gsutil setmeta -m -h "Content-Type:text/html" gs://two-baldies-staging/*.html
gsutil setmeta -m -h "Cache-Control:private, max-age=0, no-transform" gs://two-baldies-staging/*.html

gsutil web set -m index.html gs://two-baldies-staging

gsutil setmeta -m -h "Content-Type:text/html" gs://two-baldies-staging/**.html
gsutil setmeta -m -h "Cache-Control:no-cache" gs://two-baldies-staging/**.html

gsutil setmeta -m -h "Content-Type:image/png" gs://two-baldies-staging/**.png
gsutil setmeta -m -h "Cache-Control:public, max-age=31536000" gs://two-baldies-staging/**.png

gsutil setmeta -m -h "Content-Type:image/svg+xml" gs://two-baldies-staging/**.svg
gsutil setmeta -m -h "Cache-Control:public, max-age=31536000" gs://two-baldies-staging/**.svg

gsutil setmeta -m -h "Content-Type:text/javascript" gs://two-baldies-staging/**.js
gsutil setmeta -m -h "Cache-Control:public, max-age=31536000" gs://two-baldies-staging/**.js

gsutil setmeta -m -h "Content-Type:text/css" gs://two-baldies-staging/**.css
gsutil setmeta -m -h "Cache-Control:public, max-age=31536000" gs://two-baldies-staging/**.css

gsutil setmeta -m -h "Content-Type:application/x-font-ttf" gs://two-baldies-staging/**.eot
gsutil setmeta -m -h "Cache-Control:public, max-age=31536000" gs://two-baldies-staging/**.ttf

gsutil setmeta -m -h "Content-Type:application/application/vnd.ms-fontobject" gs://two-baldies-staging/**.eot
gsutil setmeta -m -h "Cache-Control:public, max-age=31536000" gs://two-baldies-staging/**.eot

gsutil setmeta -m -h "Content-Type:application/application/font-woff" gs://two-baldies-staging/**.woff
gsutil setmeta -m -h "Cache-Control:public, max-age=31536000" gs://two-baldies-staging/**.woff

gsutil setmeta -m -h "Content-Type:application/application/font-woff" gs://two-baldies-staging/**.woff
gsutil setmeta -m -h "Cache-Control:public, max-age=31536000" gs://two-baldies-staging/**.woff

gsutil setmeta -m -h "Content-Type:application/application/font-woff2" gs://two-baldies-staging/**.woff2
gsutil setmeta -m -h "Cache-Control:public, max-age=31536000" gs://two-baldies-staging/**.woff2