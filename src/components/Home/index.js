import { Description, ShopImage, Title } from "./styles";

const Home = () => {
	return (
		<>
			<Title>Vader's Mechanical Keyboards</Title>
			<Description>
				We've got all the parts you need to either build or customize your
				keyboard
			</Description>
			<ShopImage
				src="https://external-preview.redd.it/ieV4VoFLENgOJ7S-CBjQXUODx2xEx9rFb7VtIV0qMh0.jpg?auto=webp&s=ffcb1a82ed1cfb5001a8b30f17fc896bfb41a3f1"
				alt="Vador's Keyboards"
			/>
		</>
	);
};

export default Home;
