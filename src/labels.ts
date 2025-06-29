export const LABELS = {
    footer: {
        storeName: "Store name",
        links: {
            home: 'Home',
            about: 'About',
            termsAndConditions: 'Terms and Conditions',
            privacyPolicy: 'Privacy Policy',
            faq: 'FAQ',
            shippingAndReturns: 'Shipping and Return Policy',
        },
        copyRights: `&copy; ${new Date().getFullYear()} MyApp. All rights reserved.`,
    },
    header: {
        navbar: {
            links: {
                storeName: "MyApp",
                all: "All",
                shirts: "Shirts",
                stickers: "Stickers",
            },
            addToCart: "Add to Cart",
            viewCart: "View Cart",
            searchForProducts: "Search for products...",
        }
    },
    home: {
        herosection: {
            tshirt: {
                name: 'Circles T-Shirt',
                price: '200',
                currency: 'USD',
                imageSource: '/images/tshirt/t-shirt-1.avif'
            },
            bag: {
                name: 'Drawstring Bag',
                price: '12',
                currency: 'USD',
                imageSource: '/images/bags/bag-1-dark.avif'
            },
            cup: {
                name: 'Cup',
                price: '15',
                currency: 'USD',
                imageSource: '/images/cup/cup-black.avif'
            }
        },
        carouselSection: {
            products: {
                mug: {
                    name: 'Mug',
                    price: '15',
                    currency: 'USD',
                    imageSource: '/images/cup/mug-1.avif'
                },
                hoodie: {
                    name: 'Hoodie',
                    price: '50',
                    currency: 'USD',
                    imageSource: '/images/hoodie/hoodie.avif'
                },
                onesie: {
                    name: 'Onesie',
                    price: '10',
                    currency: 'USD',
                    imageSource: '/images/onesie/baby-onesie-beige-1.avif'
                },
                babyCap: {
                    name: 'Baby Cap',
                    price: '10',
                    currency: 'USD',
                    imageSource: '/images/cap/baby-cap-black.avif'
                },
            }
        }
    }
}