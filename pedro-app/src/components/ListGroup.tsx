import { MouseEvent, useState } from "react";
import CarLists from "./CarList";

function ListGroup() {
	const getMessage = () => {
		return items.length === 0 ? <p>No items found</p> : null;
	};

	// Event handler
	const handleClick = (event: MouseEvent) => {
		console.log(event);
	};

	const [selectedIndex, setSelectedIndex] = useState(-1);

	const [items, setItems] = useState([
		{
			id: 1,
			name: "Brasil",
			capital: "Brasilia",
			habitantes: 200000000,
		},
		{
			id: 2,
			name: "Argentina",
			capital: "Buenos Aires",
			habitantes: 40000000,
		},
		{
			id: 3,
			name: "Chile",
			capital: "Santiago",
			habitantes: 20000000,
		},
		{
			id: 4,
			name: "Uruguay",
			capital: "Montevideo",
			habitantes: 3000000,
		},
		{
			id: 5,
			name: "Paraguay",
			capital: "Asuncion",
			habitantes: 7000000,
		},
		{
			id: 6,
			name: "Bolivia",
			capital: "La Paz",
			habitantes: 10000000,
		},
	]);

	const updateItems = () => {
		const updatedItems = items.map((item) => {
			return { ...item, name: item.name + " - Atualizado" };
		});
		setItems(updatedItems);
	};

    const deleteItems = () => {
        setItems([]);
    }

	const filterItems = () => {
		const updatedItems = items.filter((item) => {
			return item.id !== 2;
		});
		setItems(updatedItems);
	};

	return (
		<>
			<div className="row">
				<div className="col-md-6">
					<h1>List</h1>
					{getMessage()}
					<ul className="list-group">
						{items.map((item, index) => (
							<li
								className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
								key={item.id}
								onClick={() => {
									setSelectedIndex(index);
								}}
							>
								Nome: {item.name}
								<br />
								Capital: {item.capital}
								<br />
								Habitantes: {item.habitantes}
							</li>
						))}
					</ul>
					<div className="row">
						<div className="col-md-4">
							<button type="button" className="btn btn-outline-primary w-100" onClick={filterItems}>
								Filtar items
							</button>
						</div>
						<div className="col-md-4">
							<button type="button" className="btn btn-outline-danger w-100" onClick={deleteItems}>
								Deletar items
							</button>
						</div>
						<div className="col-md-4">
							<button
								type="button"
								className="btn btn-outline-warning w-100"
								onClick={() => {
									updateItems();
								}}
							>
								Atualizar todos
							</button>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<CarLists />
				</div>
			</div>
		</>
	);
}

export default ListGroup;
