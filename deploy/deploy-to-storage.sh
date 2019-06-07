gsutil -m rsync -r -d "dist" gs://$STORAGE_ACCOUNT_NAME

gsutil web set -m index.html gs://$STORAGE_ACCOUNT_NAME

gsutil -m setmeta -h "Content-Type:text/html" \
  -h "Cache-Control:private, max-age=0, no-transform" \
  -h "Content-Disposition" gs://$STORAGE_ACCOUNT_NAME/**.html

gsutil -m setmeta -h "Content-Type:image/png" \
  -h "Cache-Control:public, max-age=31536000" gs://$STORAGE_ACCOUNT_NAME/**.png

gsutil -m setmeta -m -h "Content-Type:image/svg+xml" \
  -h "Cache-Control:public, max-age=31536000" gs://$STORAGE_ACCOUNT_NAME/**.svg

gsutil -m setmeta -h "Content-Type:text/javascript" \
  -h "Cache-Control:public, max-age=31536000" gs://$STORAGE_ACCOUNT_NAME/**.js

gsutil -m setmeta -h "Content-Type:text/css" \
  -h "Cache-Control:public, max-age=31536000" gs://$STORAGE_ACCOUNT_NAME/**.css

gsutil -m setmeta -h "Content-Type:application/x-font-ttf" \
  -h "Cache-Control:public, max-age=31536000" gs://$STORAGE_ACCOUNT_NAME/**.ttf

gsutil -m setmeta -h "Content-Type:application/application/vnd.ms-fontobject" \
  -h "Cache-Control:public, max-age=31536000" gs://$STORAGE_ACCOUNT_NAME/**.eot

gsutil -m setmeta -h "Content-Type:application/application/font-woff" \
  -h "Cache-Control:public, max-age=31536000" gs://$STORAGE_ACCOUNT_NAME/**.woff

gsutil -m setmeta -h "Content-Type:application/application/font-woff2" \
  -h "Cache-Control:public, max-age=31536000" gs://$STORAGE_ACCOUNT_NAME/**.woff2