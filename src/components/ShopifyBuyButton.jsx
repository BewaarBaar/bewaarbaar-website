import { useEffect, useRef } from 'react'

const ShopifyBuyButton = ({ productId = '10609642963281' }) => {
  const containerRef = useRef(null)
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const init = () => {
      if (!window.ShopifyBuy || !window.ShopifyBuy.UI) {
        setTimeout(init, 250)
        return
      }

      const client = window.ShopifyBuy.buildClient({
        domain: '1zcgqx-jx.myshopify.com',
        storefrontAccessToken: '1dddeb844555b80db5e515fa86788850',
      })

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent('product', {
          id: productId,
          node: containerRef.current,
          moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0",
                    "margin-bottom": "0"
                  }
                },
                button: {
                  "font-family": "Montserrat, sans-serif",
                  "font-size": "14px",
                  "padding-top": "15px",
                  "padding-bottom": "15px",
                  "background-color": "#ea8258",
                  ":hover": { "background-color": "#d3754f" },
                  ":focus": { "background-color": "#d3754f" },
                  "border-radius": "22px",
                  "padding-left": "43px",
                  "padding-right": "43px"
                },
              },
              contents: {
                img: false,
                title: false,
                price: false,
                description: false,
              },
              text: {
                button: "Toevoegen"
              },
              googleFonts: ["Montserrat"]
            },
            cart: {
              styles: {
                button: {
                  "font-family": "Montserrat, sans-serif",
                  "font-size": "14px",
                  "padding-top": "15px",
                  "padding-bottom": "15px",
                  "background-color": "#ea8258",
                  ":hover": { "background-color": "#d3754f" },
                  ":focus": { "background-color": "#d3754f" },
                  "border-radius": "22px"
                }
              },
              text: {
                total: "Subtotaal",
                button: "Afrekenen"
              },
              googleFonts: ["Montserrat"]
            },
            toggle: {
              styles: {
                toggle: {
                  "font-family": "Montserrat, sans-serif",
                  "background-color": "#ea8258",
                  ":hover": { "background-color": "#d3754f" },
                  ":focus": { "background-color": "#d3754f" }
                },
                count: { "font-size": "14px" }
              },
              googleFonts: ["Montserrat"]
            }
          }
        })
      })
    }

    init()
  }, [productId])

  return <div ref={containerRef} />
}

export default ShopifyBuyButton
