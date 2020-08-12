import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
	return (
		<article className="teacher-item">
			<header>
				<img
					src="https://guilhermesalviano.now.sh/static/media/perfil.d0c2f4be.jpeg"
					alt="Guilherme Farias"
				/>
				<div>
					<strong>Guilherme Farias</strong>
					<span>Desenvolvedor</span>
				</div>
			</header>

			<p>
				Entusiasta em desenvolvimento web
				<br /> <br />
				Testesss
			</p>

			<footer>
				<p>
					Preço/hora
					<strong>R$ 120,00</strong>
				</p>
				<button type="button">
					<img src={whatsappIcon} alt="Whatsapp" />
					Entrar em contato
				</button>
			</footer>
		</article>
	);
}

export default TeacherItem;
