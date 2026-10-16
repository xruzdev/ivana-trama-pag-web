import localFont from 'next/font/local'
export const switzer = localFont({
    src : [
        {
            path: "./Switzer-Light.woff",
            weight: "300",
            style: "normal"
        },
        {
            path: "./Switzer-Regular.woff",
            weight: "400",
            style: "normal"
        },
        {

            path:"./Switzer-Medium.woff",
            weight: "500",
            style: "normal"
        },
        {
            path:"./Switzer-Bold.woff",
            weight: "700",
            style: "normal"
        }
    ]
})