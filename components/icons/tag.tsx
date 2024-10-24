import Icon from "../icon"

const Tag = `
              <g filter="url(#a)">
                <rect
            x=".3" y=".3" width="9.1" height="9.1" rx="4.5" fill="#00FF93" fill-opacity=".3"></rect><path
            d="M6.8 3.6 4.1 6 3 4.9" stroke="#00FF93" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><filter
            id="a" x="-4.9" y="-4.9" width="19.5" height="19.5" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur
            in="BackgroundImageFix" stdDeviation="2.6"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in"
                                                                                     result="effect1_backgroundBlur_242_105932"></feComposite><feBlend
            in="SourceGraphic" in2="effect1_backgroundBlur_242_105932" result="shape"></feBlend></filter></defs>`

export default Icon(Tag)