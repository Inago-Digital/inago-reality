export function Scripts() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PQLJ7L8Z');`,
        }}
      />
      <script>
        var CAPI_PROXY = 'https://capi-proxy.inago.cz/event'; var CAPI_KEY =
        'capi_7645a3a94e4d26e1f7c760aba31114fac1fb2378';
      </script>
      <script src="https://capi-proxy.inago.cz/fb-capi-client.js"></script>
    </>
  )
}
