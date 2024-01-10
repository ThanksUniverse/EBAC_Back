import { useState } from "react";

function CarLists() {
	// Inicializando o estado para o índice selecionado
	const [selectedIndex, setSelectedIndex] = useState(-1);

	let cars = [
		{ id: 1, brand: "Toyota", model: "Corolla", year: 2020, price: 20000 },
		{ id: 2, brand: "Ford", model: "Mustang", year: 2018, price: 35000 },
		{ id: 3, brand: "Honda", model: "Civic", year: 2022, price: 25000 },
		{ id: 4, brand: "Chevrolet", model: "Camaro", year: 2019, price: 30000 },
		{ id: 5, brand: "Tesla", model: "Model 3", year: 2021, price: 45000 },
	];

	return (
		<>
			<div className="row">
				<div className="col-md-6">
					<h1>Lista de Carros</h1>
					<ul className="list-group">
						{cars.map((item, index) => (
							<li className={selectedIndex === index ? "list-group-item active" : "list-group-item"} key={item.id} onClick={() => setSelectedIndex(index)}>
								Marca: {item.brand}
								<br />
								Modelo: {item.model}
								<br />
								Ano: {item.year}
								<br />
								Preço: {item.price}
							</li>
						))}
					</ul>
				</div>
			</div>

			<p>
				Soma total dos carros:{" "}
				{
					cars.reduce((total, item) => {
						return total + item.price;
					}, 0)
				}
			</p>
		</>
	);
}

export default CarLists;
