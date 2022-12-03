import React, { useEffect, useState } from "react";
import testi from "./testi.svg";
import "./newlanding.css";
import { Caro } from "./Caro";
import "./TestiCaro.css";
import { useNavigate } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import avatar from "./avatar.png";
import mat from "./mat.svg";
import { Popup } from "../Popup/Popup";
export const Landing = () => {
	const navigate = useNavigate();
	const [pagedata, setPagedata] = useState([]);
	const [loading, setLoading] = useState(true);
	const getdata = async () => {
		const data = await fetch("https://tinarosario.com/api/Testimonials")
			.then((res) => res.json())
			.then((result) => {
				const data = result.data;
				// const data = temp.filter(
				// 	(e) => e.attributes.Main_Category == "Designer Collection"
				// );
				setPagedata(data.reverse());
				setLoading(false);
			});
	};

	useEffect(() => {
		getdata();
	}, []);

	return (
		<div
			className="landing"
			style={{
				display: "flex",
				flexDirection: "column"
			}}
		>
			<FloatingWhatsApp
				allowClickAway="true"
				statusMessage="Online"
				phoneNumber="917200060540"
				accountName="Tina rosario"
				avatar={avatar}
				chatMessage={
					"Welcome to The Design House by Tina Rosario. \n How can we help you?"
				}
			/>


			<div className="landsec1">
				<Caro />
			</div>

			<div className="landbgdiv">
				<div
					style={{
						width: "100%",
						height: "30px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						color: "black",
						fontSize: "20px"
						// marginTop: "30px"
					}}
				>
					<span className="landtit">The Design house</span>
				</div>
				<span className="untoldclass">"The Untold Fashion Destination"</span>
				<div className="landiconsdiv">
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							width: "150px",
							alignItems: "center",
							textAlign: "center"
						}}
						className="givenmargin"
					>
						<svg
							width="70"
							height="70"
							viewBox="0 0 84 80"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="84" height="80" rx="22" fill="#4C2A76" />
							<path
								d="M30.2543 55.975C32.0409 55.975 34.5223 58.2354 36.3172 58.2354C38.4906 58.2354 40.5155 55.975 42.3809 55.975C44.2463 55.975 46.2722 58.2354 48.4447 58.2354C50.2413 58.2354 52.7209 55.975 54.5103 55.975C56.0053 55.975 58.4932 56.9396 59.7664 57.5049C59.2027 47.3978 51.664 40.7666 49.2376 35.9463H49.7152V35.0629V31.5296V30.6463H49.1569C50.3165 27.6041 52.4899 23.5699 51.4495 19.4076C51.4495 19.4076 51.2222 19.4085 50.839 19.4288V12H49.7243V19.5233C47.7654 19.7362 44.558 20.3519 42.3809 22.1415C40.2038 20.351 36.9946 19.7362 35.0357 19.5233V12H33.9238V19.4297C33.5415 19.4094 33.3133 19.4085 33.3133 19.4085C32.271 23.5708 34.4453 27.6041 35.6058 30.6472H35.0458V31.5305V35.0638V35.9472H35.5243C33.0988 40.7675 25.5656 47.3996 25 57.5049C26.2742 56.9378 28.7574 55.975 30.2543 55.975ZM48.7994 31.64V34.9525H47.5601V34.9543C49.9838 39.3029 50.8298 46.6894 50.8298 46.6894L46.3418 48.2423C46.3418 48.2423 46.3382 42.1013 44.8128 35.7166C45.1135 35.4269 45.3051 34.9304 45.3968 34.358L47.2576 38.311C47.0981 36.8093 46.1393 35.131 45.4362 34.0427C45.5132 33.2115 45.4004 32.2893 45.1153 31.64H48.7994ZM40.818 31.0818C41.4569 30.4661 43.6936 30.4661 44.3334 31.0818C44.9815 31.7054 45.3949 34.7335 44.3334 35.7555C43.6973 36.3676 41.4533 36.3676 40.818 35.7555C39.6474 34.6275 40.2231 31.655 40.818 31.0818ZM37.8205 34.9525H35.9624V31.64H40.0352C39.7675 32.2478 39.6493 33.0975 39.7006 33.8881C38.849 35.047 38.2376 36.2943 37.9791 36.8066L39.7565 34.3704C39.8207 34.7714 39.9334 35.1363 40.1003 35.418C39.2459 38.1405 38.4906 42.846 38.4906 42.846L35.0183 42.0731C35.0183 42.0731 35.8653 38.0645 37.8205 34.9525Z"
								fill="#FFB8BC"
							/>
						</svg>
						<p
							style={{
								fontSize: "20px",
								color: "#270641",
								fontFamily: "'Poppins', sans-serif"
							}}
						>
							Customization per your style, desire and comfort
						</p>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							width: "150px",
							alignItems: "center",
							textAlign: "center"
						}}
						className="givenmargin"
					>
						<svg
							width="70"
							height="70"
							viewBox="0 0 84 80"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="84" height="80" rx="22" fill="#4C2A76" />
							<path
								d="M58.0229 58.3631C57.7334 59.6038 57.5849 60.3594 56.9671 61.1933C56.5553 61.7495 55.8808 62.0686 55.1936 61.9882C54.5963 61.9185 54.0181 61.6626 53.4367 61.4388C46.7133 58.8511 41.2874 54.2949 35.8056 49.8224C34.499 48.7563 31.7418 46.2884 30.1759 44.9918C33.9882 42.2967 35.5664 40.6299 35.5664 40.6299C41.7095 45.9632 48.8717 52.2066 56.3465 55.3294C57.5376 55.8272 58.6521 55.666 58.0229 58.3631Z"
								fill="#FFB8BC"
								stroke="#4C2A76"
								stroke-width="2"
							/>
							<path
								d="M50.4251 38.3174C48.6957 36.9508 45.6709 34.6818 43.9632 33.3645C39.6238 30.0172 34.9959 27.2236 29.6867 25.6318C26.8111 24.7697 26.4335 21.8794 28.6075 19.3263C29.0026 18.8622 29.6204 18.5576 30.2172 18.6824C40.1054 20.7526 47.5883 26.8115 55.9211 34.4584C53.1018 35.9479 50.4251 38.3174 50.4251 38.3174Z"
								fill="#FFB8BC"
								stroke="#4C2A76"
								stroke-width="2"
							/>
							<path
								d="M44.4683 45.4936C50.6425 39.2444 62.6304 31.6937 68.6759 31.4161C69.3826 31.3837 70.0537 31.7371 70.4249 32.3392C71.0204 33.3052 71.2129 34.4617 71.3907 35.5989C71.5624 36.6978 70.9895 37.6356 69.9474 37.9275C62.7248 39.9506 55.7104 44.8694 50.0169 49.5654C48.1019 48.6611 44.4683 45.4936 44.4683 45.4936Z"
								fill="#FFB8BC"
							/>
							<path
								d="M44.4683 45.4936C50.6425 39.2444 62.6304 31.6937 68.6759 31.4161C69.3826 31.3837 70.0537 31.7371 70.4249 32.3392C71.0204 33.3052 71.2129 34.4617 71.3907 35.5989C71.5624 36.6978 70.9895 37.6356 69.9474 37.9275C62.7248 39.9506 55.7104 44.8694 50.0169 49.5654C48.1019 48.6611 44.4683 45.4936 44.4683 45.4936"
								stroke="#4C2A76"
								stroke-width="2"
							/>
							<path
								d="M41.0984 33.6607C34.0058 39.5829 26.3098 46.6487 17.9899 49.1783C17.2875 49.3918 16.512 49.2156 16.0068 48.6829C15.3272 47.9662 15.067 47.2287 14.7914 46.5109C13.8288 44.003 14.1017 43.2695 16.5938 42.3104C22.4437 40.0587 27.311 36.3165 32.0203 32.3164C32.7334 31.7107 34.1479 30.5477 34.928 29.9062C37.5079 30.5977 41.0984 33.6607 41.0984 33.6607Z"
								fill="#FFB8BC"
							/>
							<path
								d="M41.0984 33.6607C34.0058 39.5829 26.3098 46.6487 17.9899 49.1783C17.2875 49.3918 16.512 49.2156 16.0068 48.6829C15.3272 47.9662 15.067 47.2287 14.7914 46.5109C13.8288 44.003 14.1017 43.2695 16.5938 42.3104C22.4437 40.0587 27.311 36.3165 32.0203 32.3164C32.7334 31.7107 34.1479 30.5477 34.928 29.9062C37.5079 30.5977 41.0984 33.6607 41.0984 33.6607"
								stroke="#4C2A76"
								stroke-width="2"
							/>
							<path
								d="M28.3201 55.5122C30.3541 54.4698 33.4854 53.2397 35.5268 52.0928C37.1757 53.5468 40.9936 56.4431 40.9936 56.4431C38.2252 58.2937 33.8099 61.0492 30.736 61.8441C29.9929 62.0364 29.2039 61.7471 28.7344 61.1398C27.8356 59.9769 27.3159 58.7422 27.2712 57.2731C27.2489 56.536 27.6641 55.8483 28.3201 55.5122Z"
								fill="#FFB8BC"
							/>
							<path
								d="M28.3201 55.5122C30.3541 54.4698 33.4854 53.2397 35.5268 52.0928C37.1757 53.5468 40.9936 56.4431 40.9936 56.4431C38.2252 58.2937 33.8099 61.0492 30.736 61.8441C29.9929 62.0364 29.2039 61.7471 28.7344 61.1398C27.8356 59.9769 27.3159 58.7422 27.2712 57.2731C27.2489 56.536 27.6641 55.8483 28.3201 55.5122"
								stroke="#4C2A76"
								stroke-width="2"
							/>
							<path
								d="M44.812 23.0688C48.447 20.8702 52.5369 19.2192 55.3394 18.6196C56.1102 18.4547 56.9156 18.7913 57.3386 19.4564C58.1429 20.7208 58.4772 21.9914 58.395 23.3813C58.3546 24.067 57.9745 24.6892 57.3719 25.0182C55.6137 25.9784 52.4822 26.727 50.6824 27.5125C50.6824 27.5125 47.5087 24.8353 44.812 23.0688Z"
								fill="#FFB8BC"
								stroke="#4C2A76"
								stroke-width="2"
							/>
							<path
								d="M66.4364 41.2324C71.3455 43.1391 73.1564 43.7857 69.5748 48.7328C69.1549 49.3126 68.4878 49.3164 67.791 49.1518C65.5573 48.6243 61.5936 46.3403 59.3994 45.0639C63.4438 42.2661 66.4364 41.2324 66.4364 41.2324Z"
								fill="#FFB8BC"
							/>
							<path
								d="M66.4364 41.2324C71.3455 43.1391 73.1564 43.7857 69.5748 48.7328C69.1549 49.3126 68.4878 49.3164 67.791 49.1518C65.5573 48.6243 61.5936 46.3403 59.3994 45.0639C63.4438 42.2661 66.4364 41.2324 66.4364 41.2324"
								stroke="#4C2A76"
								stroke-width="2"
							/>
							<path
								d="M19.9275 39.0158C18.7152 38.6692 16.4087 38.3034 15.3525 37.6601C14.875 37.3693 14.5538 36.863 14.4853 36.3082C14.3117 34.9054 14.672 33.6419 15.3561 32.3706C15.73 31.6763 16.4932 31.2745 17.2771 31.3613C19.6312 31.6229 23.8855 33.4018 26.1886 34.4549C22.8532 37.5264 19.9275 39.0158 19.9275 39.0158Z"
								fill="#FFB8BC"
							/>
							<path
								d="M19.9275 39.0158C18.7152 38.6692 16.4087 38.3034 15.3525 37.6601C14.875 37.3693 14.5538 36.863 14.4853 36.3082C14.3117 34.9054 14.672 33.6419 15.3561 32.3706C15.73 31.6763 16.4932 31.2745 17.2771 31.3613C19.6312 31.6229 23.8855 33.4018 26.1886 34.4549C22.8532 37.5264 19.9275 39.0158 19.9275 39.0158"
								stroke="#4C2A76"
								stroke-width="2"
							/>
						</svg>

						<p
							style={{
								fontSize: "20px",
								color: "#270641",
								fontFamily: "'Poppins', sans-serif"
							}}
							className="givenmargin"
						>
							Premium quality fabric
						</p>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							width: "150px",
							alignItems: "center",
							textAlign: "center"
						}}
						className="givenmargin"
					>
						<svg
							width="70"
							height="70"
							viewBox="0 0 84 80"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="84" height="80" rx="22" fill="#4C2A76" />
							<path
								d="M59.19 45.3295L61.8025 30.9608C61.8757 30.5582 61.8595 30.1444 61.7552 29.7487C61.6508 29.353 61.4608 28.9851 61.1986 28.6709C60.9364 28.3567 60.6084 28.1039 60.2377 27.9305C59.867 27.7571 59.4628 27.6671 59.0536 27.6671H25.246L24.2117 21.9786C24.0949 21.3348 23.7557 20.7523 23.2533 20.3331C22.7509 19.9138 22.1172 19.6842 21.4628 19.6845H17.8605C17.5429 19.6845 17.2383 19.8107 17.0138 20.0352C16.7892 20.2598 16.6631 20.5643 16.6631 20.8819C16.6631 21.1995 16.7892 21.504 17.0138 21.7286C17.2383 21.9531 17.5429 22.0793 17.8605 22.0793H21.4628C21.5563 22.0792 21.6468 22.112 21.7186 22.1719C21.7904 22.2318 21.8388 22.315 21.8555 22.407L27.1843 51.7156C27.2439 52.0439 27.3618 52.3588 27.5326 52.6454C26.7214 53.249 26.1041 54.0763 25.7567 55.0259C25.4092 55.9754 25.3466 57.0058 25.5766 57.9904C25.8067 58.975 26.3193 59.8709 27.0515 60.5682C27.7837 61.2655 28.7036 61.7338 29.6982 61.9155C30.6929 62.0972 31.719 61.9844 32.6504 61.591C33.5819 61.1976 34.3781 60.5407 34.9414 59.701C35.5047 58.8614 35.8104 57.8754 35.8211 56.8644C35.8318 55.8533 35.5469 54.8612 35.0015 54.0098H50.2117C49.5918 54.9804 49.3125 56.1299 49.4181 57.2768C49.5237 58.4237 50.008 59.5028 50.7947 60.344C51.5814 61.1853 52.6257 61.7407 53.763 61.9227C54.9003 62.1048 56.0658 61.9031 57.0758 61.3495C58.0857 60.7958 58.8827 59.9218 59.341 58.8651C59.7993 57.8085 59.8928 56.6293 59.6068 55.5136C59.3208 54.3979 58.6716 53.4092 57.7615 52.7033C56.8514 51.9974 55.7323 51.6145 54.5805 51.615H29.9332C29.8397 51.615 29.7492 51.5823 29.6774 51.5224C29.6056 51.4625 29.5572 51.3793 29.5405 51.2873L28.8744 47.6237H56.4411C57.0955 47.6239 57.7292 47.3944 58.2316 46.9751C58.734 46.5558 59.0732 45.9734 59.19 45.3295ZM33.4266 56.8037C33.4266 57.3563 33.2627 57.8964 32.9557 58.3559C32.6487 58.8154 32.2124 59.1735 31.7019 59.3849C31.1913 59.5964 30.6296 59.6517 30.0876 59.5439C29.5456 59.4361 29.0478 59.17 28.6571 58.7793C28.2663 58.3885 28.0002 57.8907 27.8924 57.3487C27.7846 56.8068 27.84 56.245 28.0514 55.7345C28.2629 55.224 28.621 54.7876 29.0804 54.4806C29.5399 54.1736 30.0801 54.0098 30.6327 54.0098C31.3734 54.0106 32.0836 54.3052 32.6073 54.829C33.1311 55.3528 33.4258 56.0629 33.4266 56.8037ZM57.3744 56.8037C57.3744 57.3563 57.2106 57.8964 56.9036 58.3559C56.5966 58.8154 56.1602 59.1735 55.6497 59.3849C55.1392 59.5964 54.5774 59.6517 54.0354 59.5439C53.4935 59.4361 52.9957 59.17 52.6049 58.7793C52.2142 58.3885 51.9481 57.8907 51.8403 57.3487C51.7325 56.8068 51.7878 56.245 51.9993 55.7345C52.2107 55.224 52.5688 54.7876 53.0283 54.4806C53.4878 54.1736 54.0279 54.0098 54.5805 54.0098C55.3213 54.0106 56.0314 54.3052 56.5552 54.829C57.079 55.3528 57.3736 56.0629 57.3744 56.8037ZM25.6813 30.0619H59.0536C59.112 30.0619 59.1698 30.0748 59.2227 30.0995C59.2757 30.1243 59.3226 30.1604 59.36 30.2053C59.3975 30.2502 59.4246 30.3028 59.4395 30.3593C59.4544 30.4158 59.4567 30.4749 59.4463 30.5325L56.8338 44.9012C56.8172 44.9932 56.7687 45.0764 56.6969 45.1363C56.6251 45.1962 56.5346 45.229 56.4411 45.2289H28.439L25.6813 30.0619Z"
								fill="#FFB8BC"
							/>
						</svg>
						<p
							style={{
								color: "#270641",
								fontSize: "20px",
								fontFamily: "'Poppins', sans-serif"
							}}
						>
							One Stop platform
						</p>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							width: "150px",
							alignItems: "center"
						}}
						className="givenmargin"
					>
						<svg
							width="70"
							height="70"
							viewBox="0 0 84 80"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="84" height="80" rx="22" fill="#4C2A76" />
							<path
								d="M34.7769 54.1677C34.7769 57.7149 34.7816 61.2606 34.7722 64.8077C34.7707 65.8994 34.0678 66.729 32.9335 67.0417C31.9591 67.311 30.7674 66.9172 30.2693 66.0326C30.0055 65.5649 29.872 64.9814 29.8643 64.4487C29.8224 61.9642 29.8457 59.4783 29.8457 56.9939V55.9905H28.8309C25.5724 55.9905 22.3138 55.9978 19.0553 55.9876C17.2802 55.9818 15.7425 55.0335 15.2537 53.632C15.1203 53.2484 15.0334 52.8227 15.0551 52.4231C15.1963 49.804 15.2987 47.1791 15.5609 44.5687C15.7689 42.4998 16.3864 40.4975 17.4369 38.6486C18.2795 37.169 19.3982 35.9456 21.2494 35.4794C22.7793 35.0942 23.7352 35.3896 24.5405 36.6347C25.9665 38.8412 27.394 41.0462 28.7781 43.2744C29.1164 43.8188 29.4888 44.0692 30.1839 44.049C31.7077 44.0026 33.2345 44.0345 34.7598 44.0345C36.7724 44.0345 37.3465 44.4486 37.4225 46.1671H26.1232C25.8935 45.6647 25.5956 45.1768 25.2527 44.6947C24.2131 43.2324 23.3224 41.676 22.3604 40.1645C22.1338 39.8069 21.9306 39.2379 21.3487 39.5738C20.7792 39.9039 21.2323 40.3541 21.448 40.7031C22.4442 42.3072 23.4931 43.8825 24.4536 45.5055C24.736 45.9847 24.8896 46.5797 24.9222 47.1314C24.992 48.3099 24.9687 49.4942 24.9346 50.6756C24.9175 51.2214 25.1317 51.3821 25.698 51.3749C27.7152 51.3503 29.7324 51.3604 31.748 51.3662C33.7233 51.372 34.7769 52.3507 34.7769 54.1677Z"
								fill="#FFB8BC"
							/>
							<path
								d="M26.6011 48.6993C26.6243 48.4271 26.6243 48.1622 26.6011 47.903V47.3253H58.0008V49.3986H26.6011V48.6993Z"
								fill="#FFB8BC"
							/>
							<path
								d="M69.5512 52.1712C69.545 54.6136 67.9561 55.9862 65.3384 55.9891C62.1839 55.9934 59.0278 55.9905 55.8732 55.9905C54.7265 55.992 54.7265 55.9934 54.725 57.03C54.7234 59.6129 54.6924 62.1944 54.7296 64.7758C54.7576 66.6146 52.6923 67.5962 51.198 66.8737C50.3989 66.4886 49.8884 65.8993 49.8837 65.0553C49.862 61.22 49.8512 57.3833 49.8868 53.5466C49.8977 52.329 51.122 51.385 52.6023 51.3705C54.6443 51.3503 56.6878 51.343 58.7298 51.3778C59.3831 51.3894 59.6422 51.2591 59.6205 50.5887C59.5724 49.1684 59.3304 47.6699 59.7167 46.3437C60.1031 45.019 61.1582 43.8636 61.9248 42.6359C62.3903 41.8874 62.8946 41.1548 63.3135 40.3845C63.4299 40.1717 63.3042 39.846 63.2887 39.5709C62.9908 39.6737 62.5454 39.6939 62.4166 39.8923C61.0667 41.967 59.7462 44.0591 58.4583 46.1671H47.1854V46.1613C47.1311 44.7685 47.7564 44.0953 49.26 44.0374C50.9637 43.9737 52.6721 43.9317 54.3774 43.9577C55.0648 43.9679 55.4512 43.7623 55.7941 43.2179C57.1146 41.12 58.5809 39.0989 59.8083 36.9561C60.9627 34.9437 62.564 35.1246 64.1747 35.7718C65.4952 36.3017 66.3486 37.2935 67.0267 38.4285C68.3968 40.7248 68.9663 43.2512 69.2502 45.8182C69.483 47.9247 69.5559 50.053 69.5512 52.1712Z"
								fill="#FFB8BC"
							/>
							<path
								d="M26.0472 35.1565C23.6297 35.1463 21.6637 33.2946 21.6932 31.0563C21.7242 28.7543 23.6235 26.9908 26.0736 26.9923C28.5563 26.9937 30.4819 28.7977 30.4757 31.1185C30.4726 33.3482 28.4771 35.1666 26.0472 35.1565Z"
								fill="#FFB8BC"
							/>
							<path
								d="M62.8701 31.1099C62.8655 33.3699 60.9181 35.1637 58.4758 35.1565C56.0691 35.1493 54.1156 33.3149 54.1187 31.0606C54.1202 28.7948 56.0629 26.9923 58.4975 26.9952C60.9988 26.9995 62.8748 28.763 62.8701 31.1099Z"
								fill="#FFB8BC"
							/>
							<path
								d="M51.2281 22.3293C51.2281 17.7368 47.2232 14 42.3013 14C37.3794 14 33.3745 17.7368 33.3745 22.3293C33.3745 26.5033 36.6842 29.9708 40.9824 30.5673V32.5002H40.5169V42.2599H44.0857V32.5002H43.6202V30.5673C47.9184 29.9708 51.2281 26.5033 51.2281 22.3293ZM35.8572 22.3293C35.8572 19.0138 38.748 16.3165 42.3013 16.3165C45.8547 16.3165 48.7454 19.0138 48.7454 22.3293C48.7454 25.6448 45.8547 28.342 42.3013 28.342C38.748 28.342 35.8572 25.6448 35.8572 22.3293Z"
								fill="#FFB8BC"
							/>
						</svg>
						<p
							style={{
								fontSize: "20px",
								color: "#270641",
								fontFamily: "'Poppins', sans-serif",
								textAlign: "center"
							}}
							className="givenmargin"
						>
							Work Transparency
						</p>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							width: "150px",
							alignItems: "center",
							textAlign: "center"
						}}
						className="givenmargin"
					>
						<svg
							width="70"
							height="70"
							viewBox="0 0 84 80"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="84" height="80" rx="22" fill="#4C2A76" />
							<path
								d="M41.6809 65C36.6733 65 31.7781 63.5151 27.6144 60.733C23.4507 57.9509 20.2055 53.9966 18.2891 49.3701C16.3728 44.7437 15.8714 39.6528 16.8483 34.7414C17.8253 29.83 20.2367 25.3186 23.7776 21.7776C27.3186 18.2367 31.83 15.8253 36.7414 14.8483C41.6528 13.8714 46.7437 14.3728 51.3701 16.2891C55.9966 18.2055 59.9509 21.4507 62.733 25.6144C65.5151 29.7781 67 34.6733 67 39.6809C67 46.396 64.3325 52.836 59.5842 57.5842C54.836 62.3325 48.396 65 41.6809 65ZM41.6809 17.5267C37.2992 17.5267 33.0159 18.826 29.3727 21.2604C25.7295 23.6947 22.8899 27.1547 21.2131 31.2029C19.5363 35.251 19.0976 39.7055 19.9524 44.003C20.8072 48.3005 22.9172 52.248 26.0155 55.3463C29.1138 58.4446 33.0614 60.5546 37.3588 61.4094C41.6563 62.2643 46.1108 61.8255 50.159 60.1487C54.2071 58.4719 57.6671 55.6324 60.1015 51.9891C62.5358 48.3459 63.8351 44.0626 63.8351 39.6809C63.8351 33.8053 61.501 28.1702 57.3463 24.0155C53.1916 19.8608 47.5566 17.5267 41.6809 17.5267Z"
								fill="#FFB8BC"
							/>
							<path
								d="M40.0985 34.9334H36.9336C36.9336 34.094 36.6002 33.289 36.0066 32.6955C35.4131 32.102 34.6081 31.7685 33.7687 31.7685C32.9294 31.7685 32.1244 32.102 31.5308 32.6955C30.9373 33.289 30.6039 34.094 30.6039 34.9334H27.439C27.439 33.2547 28.1058 31.6447 29.2929 30.4576C30.48 29.2705 32.09 28.6037 33.7687 28.6037C35.4475 28.6037 37.0575 29.2705 38.2446 30.4576C39.4316 31.6447 40.0985 33.2547 40.0985 34.9334Z"
								fill="#FFB8BC"
							/>
							<path
								d="M55.9227 34.9334H52.7578C52.7578 34.094 52.4244 33.289 51.8309 32.6955C51.2373 32.102 50.4323 31.7685 49.593 31.7685C48.7536 31.7685 47.9486 32.102 47.355 32.6955C46.7615 33.289 46.4281 34.094 46.4281 34.9334H43.2632C43.2632 33.2547 43.9301 31.6447 45.1171 30.4576C46.3042 29.2705 47.9142 28.6037 49.593 28.6037C51.2717 28.6037 52.8817 29.2705 54.0688 30.4576C55.2558 31.6447 55.9227 33.2547 55.9227 34.9334Z"
								fill="#FFB8BC"
							/>
							<path
								d="M41.681 53.9225C38.3235 53.9225 35.1035 52.5887 32.7294 50.2146C30.3553 47.8405 29.0215 44.6205 29.0215 41.263H32.1864C32.1864 43.7811 33.1867 46.1961 34.9673 47.9767C36.7479 49.7573 39.1629 50.7576 41.681 50.7576C44.1992 50.7576 46.6142 49.7573 48.3948 47.9767C50.1754 46.1961 51.1757 43.7811 51.1757 41.263H54.3406C54.3406 44.6205 53.0068 47.8405 50.6327 50.2146C48.2586 52.5887 45.0385 53.9225 41.681 53.9225Z"
								fill="#FFB8BC"
							/>
						</svg>
						<p
							style={{
								fontSize: "20px",
								color: "#270641",
								fontFamily: "'Poppins', sans-serif"
							}}
						>
							No sitting back until we see you smile
						</p>
					</div>
				</div>
				<span style={{ marginTop: "100px" }} id="services" className="landser">
					Services
				</span>
				<div className="servcaro">
					{/* <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20727.png?alt=media&token=dea76624-8a2f-471c-916e-25039dc97493"
            }
            alt=""
            onClick={() => navigate("/wedding")}
            style={{ cursor: "pointer" }}
          /> */}
					<img
						src={
							"https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20932.png?alt=media&token=ae6a0d7f-0db2-4b51-9964-4827caa0a896"
						}
						alt=""
						onClick={() => navigate("/wedding")}
						style={{
							cursor: "pointer"
						}}
					/>
					{/* <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20662.png?alt=media&token=c6da54b1-2d93-4d54-b9fc-843aa5df5979"
            }
            alt=""
            onClick={() => navigate("/customiseddesigns")}
            style={{ cursor: "pointer" }}
          /> */}
					<img
						src={
							"https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20933.png?alt=media&token=e0a06fd6-c3b0-46ba-abb6-5ddaff6d00d5"
						}
						alt=""
						onClick={() => navigate("/customiseddesigns")}
						style={{
							cursor: "pointer"
						}}
					/>
					<img
						src={
							"https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20934.png?alt=media&token=3a9f1b90-5405-400a-8745-5a201da41ec1 "
						}
						alt=""
						onClick={() => navigate("/imagecons")}
						style={{
							cursor: "pointer"
						}}
					/>
					<img
						src={
							"https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20935.png?alt=media&token=ca32bfe1-d147-42dc-a25c-df93ced42151"
						}
						alt=""
						onClick={() => navigate("/getpampered")}
						style={{ cursor: "pointer" }}
					/>
				</div>
				<span style={{ marginTop: "100px" }} id="products" className="landser2">
					Products
				</span>
				<div className="servcaro">
					<img
						src={
							"https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20939.png?alt=media&token=e4be5c12-6ac2-4e4d-9ec7-15bfd9ed744b"
						}
						alt=""
						onClick={() => navigate("/DesignerCollections")}
						style={{ cursor: "pointer" }}
					/>
					<img
						src={
							"https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20940.png?alt=media&token=309241b0-bbfd-4f12-b9ac-520f68e8eb4d"
						}
						alt=""
						onClick={() => navigate("/Weddingproduct")}
						style={{
							cursor: "pointer"
						}}
					/>
					<img
						src={
							"https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20941.png?alt=media&token=7aea59cd-d5d5-48cf-85b4-19beb3c08ae0"
						}
						alt=""
						onClick={() => navigate("/womenswear")}
						style={{
							cursor: "pointer"
						}}
					/>
					<img
						src={
							"https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20942%20(1).png?alt=media&token=6be27f4d-05a3-4c96-b0e3-1d830ccf925e"
						}
						alt=""
						onClick={() => navigate("/Menswear")}
						style={{ cursor: "pointer" }}
					/>
				</div>
				<div style={{ marginTop: "70px" }} className="servcaro removemargin">
					<img
						id="kids"
						src={
							"https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20943.png?alt=media&token=07d393f7-78c7-4716-8959-c720af467cf4"
						}
						alt=""
						onClick={() => navigate("/kidswear")}
						style={{ cursor: "pointer" }}
					/>
					{/* <img
            id="maternity"
            src={
              "https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%2062.png?alt=media&token=74dd93fb-b46d-43eb-8e79-914cc4987e51"
            }
            alt=""
            onClick={() => navigate("/Maternity")}
            style={{ cursor: "pointer" }}
          /> */}
					<img
						id="maternity"
						src={
							"https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20936.png?alt=media&token=f9229840-8db9-4422-a2e6-04fa07f57894"
						}
						alt=""
						onClick={() => navigate("/Maternity")}
						style={{
							cursor: "pointer"
						}}
					/>
					<img
						id="handloomSari"
						src={
							"https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20944.png?alt=media&token=58c83a85-1672-4b72-984e-cb50d0962aaf"
						}
						alt=""
						onClick={() => navigate("/handloom")}
						style={{
							cursor: "pointer"
						}}
					/>
					<img
						id="exclusive"
						src={
							"https://firebasestorage.googleapis.com/v0/b/teenz-fe41d.appspot.com/o/Group%20945.png?alt=media&token=331bee23-9293-4acf-9740-1d2dd6343df9"
						}
						alt=""
						onClick={() => navigate("/exclusiveaccessories")}
						style={{ cursor: "pointer" }}
					/>
				</div>

				<span
					className="Landingtesti"
					id="Landingtesti"
					style={{ fontSize: "40px", fontWeight: "600", color: "#270641" }}
				>
					Testimonials
				</span>
				{loading ? (
					""
				) : (
					<div className="testcont" id="testcont">
						<div
							style={{ height: "100%" }}
							id="carouselExampleControls"
							class="carousel slide"
							data-ride="carousel"
						>
							<div class="carousel-inner">
								<div class="carousel-item caroresfix active ">
									<div>
										{pagedata[0].attributes.Img == null ? (
											""
										) : (
											<img
												style={{
													width: "200px",
													height: "300px",
													borderRadius: "20px"
												}}
												className="avatar"
												src={pagedata[0].attributes.Img}
											/>
										)}

										<div>
											<span style={{ fontSize: "20px", color: "#FFB8BC" }}>
												{pagedata[0].attributes.Text}
											</span>
											<p style={{ textAlign: "right", fontSize: "18px" }}>
												{pagedata[0].attributes.name}
											</p>
										</div>
									</div>
								</div>
								{pagedata.slice(1).map((e) => {
									return (
										<div class="carousel-item caroresfix  ">
											<div>
												{e.attributes.Img == null ? (
													""
												) : (
													<img
														style={{
															width: "200px",
															height: "300px",
															borderRadius: "20px"
														}}
														className="avatar"
														src={e.attributes.Img}
													/>
												)}
												<div>
													<span style={{ fontSize: "20px", color: "#FFB8BC" }}>
														{e.attributes.Text}
													</span>
													<p style={{ textAlign: "right", fontSize: "18px" }}>
														{e.attributes.name}
													</p>
												</div>
											</div>
										</div>
									);
								})}
							</div>
							<a
								class="carousel-control-prev"
								href="#carouselExampleControls"
								role="button"
								data-slide="prev"
							>
								<span
									class="carousel-control-prev-icon"
									aria-hidden="true"
								></span>
								<span class="sr-only">Previous</span>
							</a>
							<a
								class="carousel-control-next"
								href="#carouselExampleControls"
								role="button"
								data-slide="next"
							>
								<span
									class="carousel-control-next-icon"
									aria-hidden="true"
								></span>
								<span class="sr-only">Next</span>
							</a>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

//Testi container

{
	/* <div class="carousel-item  ">
                <img
                  style={{ height: "300px", width: "200px", borderRadius: "20px" }}
                  className="testiImg"
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEUQ_iSrqXzCzFmJ677shSiLMRH1R9J5fujAKXg806&s"
                  }
                />
                <div>
                  <p>“ We suggest suitable combinations of colors for different dress“</p>
                  <h3>Rowan Atkinson</h3>
                </div>
              </div>
              <div class="carousel-item  ">
                <img
                  style={{ height: "300px", width: "200px", borderRadius: "20px" }}
                  className="testiImg"
                  src={
                    "https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis="
                  }
                />
                <div>
                  <p>“ We suggest suitable combinations of colors for different dress“</p>
                  <h3>Rowan Atkinson</h3>
                </div>
              </div> */
}
