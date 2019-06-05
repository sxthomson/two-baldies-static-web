ls

gsutil -m rsync -r -d "dist" gs://$STORAGE_ACCOUNT_NAME

gsutil web set -m index.html gs://$STORAGE_ACCOUNT_NAME


gsutil -m setmeta -h "Content-Type:text/html" \
  -h "Cache-Control:private, max-age=0, no-transform" \
  -h "Content-Disposition" gs://$STORAGE_ACCOUNT_NAME/**.html

gsutil setmeta -m -h "Content-Type:image/png" gs://$STORAGE_ACCOUNT_NAME/**.png
gsutil setmeta -m -h "Cache-Control:public, max-age=31536000" gs://$STORAGE_ACCOUNT_NAME/**.png

gsutil setmeta -m -h "Content-Type:image/svg+xml" gs://$STORAGE_ACCOUNT_NAME/**.svg
gsutil setmeta -m -h "Cache-Control:public, max-age=31536000" gs://$STORAGE_ACCOUNT_NAME/**.svg

gsutil setmeta -m -h "Content-Type:text/javascript" gs://$STORAGE_ACCOUNT_NAME/**.js
gsutil setmeta -m -h "Cache-Control:public, max-age=31536000" gs://$STORAGE_ACCOUNT_NAME/**.js

gsutil setmeta -m -h "Content-Type:text/css" gs://$STORAGE_ACCOUNT_NAME/**.css
gsutil setmeta -m -h "Cache-Control:public, max-age=31536000" gs://$STORAGE_ACCOUNT_NAME/**.css

gsutil setmeta -m -h "Content-Type:application/x-font-ttf" gs://$STORAGE_ACCOUNT_NAME/**.eot
gsutil setmeta -m -h "Cache-Control:public, max-age=31536000" gs://$STORAGE_ACCOUNT_NAME/**.ttf

gsutil setmeta -m -h "Content-Type:application/application/vnd.ms-fontobject" gs://$STORAGE_ACCOUNT_NAME/**.eot
gsutil setmeta -m -h "Cache-Control:public, max-age=31536000" gs://$STORAGE_ACCOUNT_NAME/**.eot

gsutil setmeta -m -h "Content-Type:application/application/font-woff" gs://$STORAGE_ACCOUNT_NAME/**.woff
gsutil setmeta -m -h "Cache-Control:public, max-age=31536000" gs://$STORAGE_ACCOUNT_NAME/**.woff

gsutil setmeta -m -h "Content-Type:application/application/font-woff" gs://$STORAGE_ACCOUNT_NAME/**.woff
gsutil setmeta -m -h "Cache-Control:public, max-age=31536000" gs://$STORAGE_ACCOUNT_NAME/**.woff

gsutil setmeta -m -h "Content-Type:application/application/font-woff2" gs://$STORAGE_ACCOUNT_NAME/**.woff2
gsutil setmeta -m -h "Cache-Control:public, max-age=31536000" gs://$STORAGE_ACCOUNT_NAME/**.woff2