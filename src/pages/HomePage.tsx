import SearchBar from "../components/SearchBar";

export default function HomePage() {
  return (
    <>
      <div className="flex justify-center flex-col items-center  h-screen">
        <svg
          className="mt-[48px]"
          width="178"
          height="30"
          viewBox="0 0 178 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.5002 27C26.2006 27 25.3999 26.4 24.0917 25.6934C22.7835 24.9867 18.9999 22.1416 18.9999 18.6C18.9999 16.1975 18.3806 14.2543 17.3259 12.7057C16.279 11.169 14.8608 10.1043 13.3855 9.35272C12.6745 8.99064 11.9347 8.69452 11.198 8.4498C10.7685 8.30724 10.5192 7.84608 10.7056 7.4338C11.8866 4.81916 14.5169 3 17.5724 3C21.7316 3 25.1034 6.37168 25.1034 10.531C25.1034 11.4209 24.9491 12.2748 24.6657 13.0672C25.8662 12.2582 27.3126 11.7861 28.869 11.7861C33.0282 11.7861 36.3998 15.1578 36.3998 19.3172C36.3998 24.3244 31.9998 27 27.5002 27Z"
            fill="#8FB2F5"
          />
          <path
            d="M0 18.6896C0 22.6593 2.6172 25.967 6.08436 26.6978C6.61952 26.8933 7.19728 27 7.8 27H19.501C19.8934 27 20.0642 26.4752 19.7646 26.2216C17.7197 24.4914 16.2 22.0529 16.2 18.6C16.2 16.7027 15.7195 15.3208 15.0117 14.282C14.2959 13.2312 13.2891 12.4458 12.1146 11.8474C10.9293 11.2437 9.6424 10.8591 8.41348 10.5865C8.12404 10.55 7.82948 10.531 7.53104 10.531C3.37168 10.531 0 14.1838 0 18.6896Z"
            fill="#8FB2F5"
          />
          <path
            d="M49.1663 22.1732C48.7766 22.1732 48.4591 22.0794 48.2137 21.8917C47.9828 21.7041 47.7951 21.4082 47.6508 21.0041L43.1258 8.20844C42.967 7.74656 42.9959 7.35685 43.2124 7.0393C43.4433 6.72176 43.8258 6.56298 44.3599 6.56298C44.7496 6.56298 45.0527 6.6568 45.2692 6.84444C45.4857 7.01765 45.6589 7.29911 45.7888 7.68883L49.686 19.2503H48.8199L52.8903 7.71048C53.0346 7.32076 53.215 7.03208 53.4316 6.84444C53.6481 6.6568 53.9295 6.56298 54.2759 6.56298C54.6223 6.56298 54.8966 6.6568 55.0987 6.84444C55.3007 7.03208 55.4739 7.32798 55.6183 7.73213L59.5587 19.2503H58.8009L62.763 7.68883C62.8929 7.31354 63.0662 7.03208 63.2827 6.84444C63.4992 6.6568 63.7951 6.56298 64.1703 6.56298C64.6322 6.56298 64.9714 6.72176 65.1879 7.0393C65.4044 7.35685 65.4333 7.74656 65.2745 8.20844L60.7062 21.0257C60.5619 21.4154 60.3742 21.7041 60.1433 21.8917C59.9124 22.0794 59.602 22.1732 59.2123 22.1732C58.8226 22.1732 58.5123 22.0794 58.2813 21.8917C58.0504 21.7041 57.8627 21.4082 57.7184 21.0041L53.9512 10.2653H54.4491L50.6386 21.0257C50.4943 21.4154 50.3066 21.7041 50.0757 21.8917C49.8592 22.0794 49.5561 22.1732 49.1663 22.1732ZM71.5052 22.2165C70.3072 22.2165 69.2752 21.9928 68.4092 21.5453C67.5431 21.0979 66.872 20.4628 66.3956 19.6401C65.9338 18.8173 65.7028 17.843 65.7028 16.7172C65.7028 15.6202 65.9265 14.6604 66.374 13.8377C66.8359 13.0149 67.4637 12.3726 68.2576 11.9107C69.0659 11.4344 69.9825 11.1963 71.0073 11.1963C71.7578 11.1963 72.429 11.3189 73.0208 11.5643C73.627 11.8097 74.1394 12.1633 74.558 12.6252C74.991 13.0871 75.3158 13.65 75.5323 14.314C75.7632 14.9635 75.8787 15.6996 75.8787 16.5223C75.8787 16.7822 75.7849 16.9842 75.5972 17.1286C75.424 17.2585 75.1714 17.3234 74.8394 17.3234H67.8895V15.7646H73.9734L73.627 16.0893C73.627 15.4254 73.526 14.8697 73.3239 14.4222C73.1363 13.9748 72.8548 13.6356 72.4795 13.4046C72.1187 13.1593 71.664 13.0366 71.1155 13.0366C70.5093 13.0366 69.9897 13.1809 69.5567 13.4696C69.1381 13.7438 68.8133 14.1408 68.5824 14.6604C68.3659 15.1656 68.2576 15.7718 68.2576 16.479V16.6306C68.2576 17.8142 68.5319 18.7019 69.0803 19.2937C69.6433 19.871 70.466 20.1597 71.5485 20.1597C71.9238 20.1597 72.3424 20.1164 72.8043 20.0298C73.2806 19.9287 73.728 19.7628 74.1466 19.5318C74.4497 19.3586 74.7168 19.2864 74.9477 19.3153C75.1786 19.3297 75.3591 19.4091 75.489 19.5535C75.6333 19.6978 75.7199 19.8782 75.7488 20.0947C75.7777 20.2968 75.7343 20.5061 75.6189 20.7226C75.5178 20.9391 75.3374 21.1268 75.0776 21.2855C74.5724 21.6031 73.9879 21.8412 73.3239 22C72.6744 22.1443 72.0681 22.2165 71.5052 22.2165ZM81.5077 22.2165C80.7427 22.2165 80.0571 22.0722 79.4509 21.7835C78.8591 21.4804 78.39 21.0762 78.0436 20.571C77.7116 20.0659 77.5456 19.4957 77.5456 18.8606C77.5456 18.0812 77.7477 17.4678 78.1519 17.0203C78.556 16.5584 79.2127 16.2265 80.1221 16.0244C81.0314 15.8223 82.2511 15.7213 83.7811 15.7213H84.8636V17.2801H83.8027C82.9078 17.2801 82.1933 17.3234 81.6593 17.41C81.1252 17.4966 80.7427 17.6482 80.5118 17.8647C80.2953 18.0668 80.187 18.3554 80.187 18.7307C80.187 19.207 80.353 19.5968 80.685 19.8999C81.017 20.203 81.4789 20.3545 82.0706 20.3545C82.547 20.3545 82.9655 20.2463 83.3264 20.0298C83.7017 19.7988 83.9976 19.4885 84.2141 19.0988C84.4306 18.7091 84.5388 18.2616 84.5388 17.7564V15.2666C84.5388 14.5449 84.3801 14.0253 84.0625 13.7077C83.745 13.3902 83.2109 13.2314 82.4604 13.2314C82.0418 13.2314 81.5871 13.2819 81.0964 13.383C80.62 13.484 80.1149 13.6572 79.5808 13.9026C79.3066 14.0325 79.0612 14.0686 78.8447 14.0109C78.6426 13.9531 78.4838 13.8377 78.3684 13.6644C78.2529 13.4768 78.1952 13.2747 78.1952 13.0582C78.1952 12.8417 78.2529 12.6324 78.3684 12.4303C78.4838 12.2138 78.6787 12.0551 78.9529 11.954C79.6169 11.6798 80.252 11.4849 80.8582 11.3695C81.4789 11.254 82.0418 11.1963 82.547 11.1963C83.5862 11.1963 84.4378 11.355 85.1018 11.6726C85.7801 11.9901 86.2853 12.4737 86.6173 13.1232C86.9493 13.7583 87.1153 14.581 87.1153 15.5914V20.7876C87.1153 21.235 87.007 21.5814 86.7905 21.8268C86.574 22.0577 86.2637 22.1732 85.8595 22.1732C85.4554 22.1732 85.1378 22.0577 84.9069 21.8268C84.6904 21.5814 84.5821 21.235 84.5821 20.7876V19.7483H84.7553C84.6543 20.2535 84.4522 20.6937 84.1491 21.069C83.8604 21.4299 83.4924 21.7113 83.0449 21.9134C82.5975 22.1155 82.0851 22.2165 81.5077 22.2165ZM94.712 22.2165C93.7738 22.2165 92.9872 22.0577 92.3521 21.7402C91.7314 21.4226 91.2695 20.9608 90.9664 20.3545C90.6633 19.7339 90.5118 18.9689 90.5118 18.0596V13.4479H89.3859C89.0395 13.4479 88.7725 13.3613 88.5848 13.1881C88.3972 13.0005 88.3034 12.7479 88.3034 12.4303C88.3034 12.0984 88.3972 11.8458 88.5848 11.6726C88.7725 11.4994 89.0395 11.4128 89.3859 11.4128H90.5118V9.44254C90.5118 8.99509 90.6272 8.65589 90.8582 8.42495C91.1035 8.19401 91.4427 8.07854 91.8758 8.07854C92.3088 8.07854 92.6407 8.19401 92.8717 8.42495C93.1026 8.65589 93.2181 8.99509 93.2181 9.44254V11.4128H95.5131C95.8595 11.4128 96.1265 11.4994 96.3142 11.6726C96.5018 11.8458 96.5956 12.0984 96.5956 12.4303C96.5956 12.7479 96.5018 13.0005 96.3142 13.1881C96.1265 13.3613 95.8595 13.4479 95.5131 13.4479H93.2181V17.908C93.2181 18.6008 93.3697 19.1204 93.6728 19.4669C93.9759 19.8133 94.4666 19.9865 95.145 19.9865C95.3904 19.9865 95.6069 19.9648 95.7945 19.9215C95.9822 19.8782 96.1482 19.8494 96.2925 19.8349C96.4657 19.8205 96.6101 19.8782 96.7255 20.0081C96.841 20.1236 96.8987 20.369 96.8987 20.7443C96.8987 21.0329 96.8482 21.2927 96.7472 21.5237C96.6606 21.7402 96.4946 21.8917 96.2492 21.9783C96.0616 22.0361 95.8162 22.0866 95.5131 22.1299C95.21 22.1876 94.9429 22.2165 94.712 22.2165ZM99.7888 22.1732C99.3558 22.1732 99.0238 22.0577 98.7928 21.8268C98.5619 21.5814 98.4464 21.235 98.4464 20.7876V7.92698C98.4464 7.47953 98.5619 7.14034 98.7928 6.9094C99.0238 6.67845 99.3558 6.56298 99.7888 6.56298C100.222 6.56298 100.554 6.67845 100.785 6.9094C101.03 7.14034 101.153 7.47953 101.153 7.92698V13.5345H100.85C101.167 12.7695 101.658 12.1922 102.322 11.8025C103 11.3983 103.765 11.1963 104.617 11.1963C105.468 11.1963 106.169 11.355 106.717 11.6726C107.266 11.9901 107.677 12.4737 107.951 13.1232C108.225 13.7583 108.362 14.5666 108.362 15.5481V20.7876C108.362 21.235 108.247 21.5814 108.016 21.8268C107.785 22.0577 107.453 22.1732 107.02 22.1732C106.587 22.1732 106.248 22.0577 106.003 21.8268C105.772 21.5814 105.656 21.235 105.656 20.7876V15.678C105.656 14.8552 105.497 14.2562 105.18 13.881C104.877 13.5057 104.4 13.318 103.751 13.318C102.957 13.318 102.322 13.5706 101.846 14.0758C101.384 14.5666 101.153 15.2233 101.153 16.046V20.7876C101.153 21.7113 100.698 22.1732 99.7888 22.1732ZM116.329 22.2165C115.131 22.2165 114.099 21.9928 113.233 21.5453C112.367 21.0979 111.696 20.4628 111.22 19.6401C110.758 18.8173 110.527 17.843 110.527 16.7172C110.527 15.6202 110.75 14.6604 111.198 13.8377C111.66 13.0149 112.288 12.3726 113.082 11.9107C113.89 11.4344 114.806 11.1963 115.831 11.1963C116.582 11.1963 117.253 11.3189 117.845 11.5643C118.451 11.8097 118.963 12.1633 119.382 12.6252C119.815 13.0871 120.14 13.65 120.356 14.314C120.587 14.9635 120.703 15.6996 120.703 16.5223C120.703 16.7822 120.609 16.9842 120.421 17.1286C120.248 17.2585 119.995 17.3234 119.663 17.3234H112.713V15.7646H118.797L118.451 16.0893C118.451 15.4254 118.35 14.8697 118.148 14.4222C117.96 13.9748 117.679 13.6356 117.303 13.4046C116.943 13.1593 116.488 13.0366 115.939 13.0366C115.333 13.0366 114.814 13.1809 114.381 13.4696C113.962 13.7438 113.637 14.1408 113.406 14.6604C113.19 15.1656 113.082 15.7718 113.082 16.479V16.6306C113.082 17.8142 113.356 18.7019 113.904 19.2937C114.467 19.871 115.29 20.1597 116.372 20.1597C116.748 20.1597 117.166 20.1164 117.628 20.0298C118.105 19.9287 118.552 19.7628 118.971 19.5318C119.274 19.3586 119.541 19.2864 119.772 19.3153C120.003 19.3297 120.183 19.4091 120.313 19.5535C120.457 19.6978 120.544 19.8782 120.573 20.0947C120.602 20.2968 120.558 20.5061 120.443 20.7226C120.342 20.9391 120.161 21.1268 119.902 21.2855C119.396 21.6031 118.812 21.8412 118.148 22C117.498 22.1443 116.892 22.2165 116.329 22.2165ZM124.232 22.1732C123.784 22.1732 123.438 22.0577 123.192 21.8268C122.961 21.5814 122.846 21.235 122.846 20.7876V12.6036C122.846 12.1561 122.961 11.8169 123.192 11.586C123.423 11.355 123.748 11.2396 124.167 11.2396C124.585 11.2396 124.91 11.355 125.141 11.586C125.372 11.8169 125.487 12.1561 125.487 12.6036V13.9676H125.271C125.473 13.1015 125.87 12.4448 126.462 11.9973C127.053 11.5499 127.84 11.2829 128.821 11.1963C129.125 11.1674 129.363 11.2468 129.536 11.4344C129.724 11.6076 129.832 11.8819 129.861 12.2571C129.89 12.618 129.803 12.9139 129.601 13.1448C129.413 13.3613 129.125 13.4912 128.735 13.5345L128.259 13.5778C127.378 13.6644 126.714 13.9387 126.267 14.4006C125.819 14.848 125.596 15.4831 125.596 16.3058V20.7876C125.596 21.235 125.48 21.5814 125.249 21.8268C125.018 22.0577 124.679 22.1732 124.232 22.1732ZM137.614 22.1732C137.267 22.1732 136.986 22.0938 136.769 21.935C136.567 21.7763 136.444 21.567 136.401 21.3072C136.358 21.0329 136.408 20.7298 136.553 20.3978L142.268 7.73213C142.456 7.31354 142.68 7.01765 142.94 6.84444C143.214 6.6568 143.524 6.56298 143.871 6.56298C144.203 6.56298 144.499 6.6568 144.758 6.84444C145.033 7.01765 145.264 7.31354 145.451 7.73213L151.189 20.3978C151.347 20.7298 151.405 21.0329 151.362 21.3072C151.319 21.5814 151.196 21.7979 150.994 21.9567C150.792 22.101 150.525 22.1732 150.193 22.1732C149.789 22.1732 149.471 22.0794 149.24 21.8917C149.024 21.6897 148.829 21.3866 148.655 20.9824L147.248 17.7131L148.417 18.4709H139.281L140.45 17.7131L139.064 20.9824C138.877 21.401 138.682 21.7041 138.48 21.8917C138.278 22.0794 137.989 22.1732 137.614 22.1732ZM143.827 9.74565L140.796 16.9554L140.233 16.2625H147.465L146.923 16.9554L143.871 9.74565H143.827ZM154.656 26.0703C154.223 26.0703 153.891 25.9549 153.66 25.7239C153.429 25.493 153.313 25.1538 153.313 24.7063V12.6036C153.313 12.1561 153.429 11.8169 153.66 11.586C153.891 11.355 154.216 11.2396 154.634 11.2396C155.067 11.2396 155.399 11.355 155.63 11.586C155.861 11.8169 155.976 12.1561 155.976 12.6036V14.2923L155.738 13.6428C155.955 12.9067 156.395 12.3149 157.059 11.8674C157.737 11.42 158.524 11.1963 159.419 11.1963C160.343 11.1963 161.151 11.42 161.844 11.8674C162.551 12.3149 163.1 12.95 163.489 13.7727C163.879 14.581 164.074 15.5553 164.074 16.6956C164.074 17.8214 163.879 18.8029 163.489 19.6401C163.1 20.4628 162.558 21.0979 161.865 21.5453C161.173 21.9928 160.357 22.2165 159.419 22.2165C158.538 22.2165 157.766 22 157.102 21.567C156.438 21.1195 155.991 20.5422 155.76 19.8349H156.02V24.7063C156.02 25.1538 155.897 25.493 155.652 25.7239C155.421 25.9549 155.089 26.0703 154.656 26.0703ZM158.661 20.1597C159.195 20.1597 159.664 20.0298 160.068 19.77C160.473 19.5102 160.783 19.1277 160.999 18.6225C161.23 18.1029 161.346 17.4606 161.346 16.6956C161.346 15.5408 161.1 14.682 160.61 14.1191C160.119 13.5418 159.469 13.2531 158.661 13.2531C158.127 13.2531 157.658 13.383 157.254 13.6428C156.85 13.8882 156.532 14.2707 156.301 14.7903C156.085 15.2955 155.976 15.9306 155.976 16.6956C155.976 17.8358 156.222 18.7019 156.713 19.2937C157.203 19.871 157.853 20.1597 158.661 20.1597ZM167.638 26.0703C167.205 26.0703 166.873 25.9549 166.642 25.7239C166.411 25.493 166.295 25.1538 166.295 24.7063V12.6036C166.295 12.1561 166.411 11.8169 166.642 11.586C166.873 11.355 167.198 11.2396 167.616 11.2396C168.049 11.2396 168.381 11.355 168.612 11.586C168.843 11.8169 168.958 12.1561 168.958 12.6036V14.2923L168.72 13.6428C168.937 12.9067 169.377 12.3149 170.041 11.8674C170.719 11.42 171.506 11.1963 172.401 11.1963C173.325 11.1963 174.133 11.42 174.826 11.8674C175.533 12.3149 176.082 12.95 176.471 13.7727C176.861 14.581 177.056 15.5553 177.056 16.6956C177.056 17.8214 176.861 18.8029 176.471 19.6401C176.082 20.4628 175.54 21.0979 174.848 21.5453C174.155 21.9928 173.339 22.2165 172.401 22.2165C171.521 22.2165 170.748 22 170.084 21.567C169.42 21.1195 168.973 20.5422 168.742 19.8349H169.002V24.7063C169.002 25.1538 168.879 25.493 168.634 25.7239C168.403 25.9549 168.071 26.0703 167.638 26.0703ZM171.643 20.1597C172.177 20.1597 172.646 20.0298 173.05 19.77C173.455 19.5102 173.765 19.1277 173.981 18.6225C174.212 18.1029 174.328 17.4606 174.328 16.6956C174.328 15.5408 174.083 14.682 173.592 14.1191C173.101 13.5418 172.451 13.2531 171.643 13.2531C171.109 13.2531 170.64 13.383 170.236 13.6428C169.832 13.8882 169.514 14.2707 169.283 14.7903C169.067 15.2955 168.958 15.9306 168.958 16.6956C168.958 17.8358 169.204 18.7019 169.695 19.2937C170.185 19.871 170.835 20.1597 171.643 20.1597Z"
            fill="#BFBFD4"
          />
        </svg>

        <div className="flex justify-center flex-col items-center  h-screen">
          <div>
            <h1 className="text-white font-[700] lg:text-[32px] leading-[28px] text-[20px]">
              Welcome to <span className="lg:text-blue">Weather App</span>
            </h1>
          </div>

          <div className="flex flex-col ">
            <div>
              <p className="text-grey text-center leading-[28px] mt-5 ">
                Choose Location to see Weather Forecast
              </p>
            </div>

            <div>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}