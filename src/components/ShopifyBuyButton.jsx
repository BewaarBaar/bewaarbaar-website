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
              popup: false,
              styles: {
                cart: {
                  "background-color": "#faf9f6",
                  "font-family": "Montserrat, sans-serif",
                  "border-radius": "16px 0 0 16px",
                },
                header: {
                  "padding": "20px 20px 16px",
                  "border-bottom": "1px solid #e8e6e1",
                },
                title: {
                  "font-family": "Montserrat, sans-serif",
                  "font-size": "18px",
                  "font-weight": "700",
                  "color": "#1a1a2e",
                  "letter-spacing": "0.5px",
                },
                lineItems: {
                  "padding": "16px 20px",
                  "font-family": "Montserrat, sans-serif",
                  "font-size": "14px",
                },
                subtotalText: {
                  "font-family": "Montserrat, sans-serif",
                  "font-size": "15px",
                  "font-weight": "600",
                  "color": "#1a1a2e",
                },
                subtotal: {
                  "font-family": "Montserrat, sans-serif",
                  "font-size": "16px",
                  "font-weight": "700",
                  "color": "#1a1a2e",
                },
                notice: {
                  "font-family": "Montserrat, sans-serif",
                  "font-size": "12px",
                  "color": "#999",
                  "font-style": "italic",
                  "padding": "8px 0 0",
                },
                close: {
                  "font-size": "20px",
                  "color": "#999",
                  ":hover": { "color": "#1a1a2e" },
                },
                empty: {
                  "font-family": "Montserrat, sans-serif",
                  "font-size": "15px",
                  "color": "#999",
                  "padding": "40px 20px",
                  "text-align": "center",
                },
                footer: {
                  "padding": "16px 20px 20px",
                  "border-top": "1px solid #e8e6e1",
                  "background-color": "#faf9f6",
                },
                button: {
                  "font-family": "Montserrat, sans-serif",
                  "font-size": "15px",
                  "font-weight": "700",
                  "letter-spacing": "0.8px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  "background-color": "#ea8258",
                  ":hover": { "background-color": "#d3754f" },
                  ":focus": { "background-color": "#d3754f" },
                  "border-radius": "26px",
                  "text-transform": "uppercase",
                }
              },
              text: {
                title: "Winkelwagen",
                total: "Subtotaal",
                button: "Afrekenen",
                empty: "Je winkelwagen is leeg",
                notice: "Verzendkosten en kortingscodes worden bij het afrekenen berekend.",
              },
              googleFonts: ["Montserrat"]
            },
            toggle: {
              styles: {
                toggle: {
                  "font-family": "Montserrat, sans-serif",
                  "background-color": "#ea8258",
                  ":hover": { "background-color": "#d3754f" },
                  ":focus": { "background-color": "#d3754f" },
                  "padding": "12px",
                },
                count: {
                  "font-size": "13px",
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "700",
                }
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
