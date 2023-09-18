import React, {useState, useEffect, useRef} from 'react'
import anime from "animejs/lib/anime.es.js"
import './styles.css'

const FunPage = () => {

	const [wrapper, setWrapper] = useState()
	const [rows, setRows] = useState(0)
	const [columns, setColumns] = useState(0)
	const [toggled, setToggled] = useState(false)
	const [counter, setCounter] = useState(0)
	const [index, setIndex] = useState(null)

	const animation = useRef(null);

	useEffect(
		() => {
			if (document.getElementById("tiles")) {
				setWrapper(document.getElementById("tiles"));

			} else {
				setCounter(counter + 1)
			}
		}, []
	)

	useEffect(
		() => {
			if (wrapper) {
				createGrid()
			}
		},[wrapper]
	)

	useEffect(
		() => {
			document.body.classList.toggle("toggled");
			console.log(toggled)
			if (index) {
				animation.current =	anime({
					targets: ".tile",
					opacity: toggled ? 0 : 1,
					delay: anime.stagger(50, {
						grid: [columns, rows],
						from: index
					})
				});
			}
		},[toggled]
	)

	useEffect(() => {
		function handleResize() {
			window.onresize = () => createGrid();
		}
		window.addEventListener('resize', handleResize)
	})

	const toggle = () => {

	}

	const handleOnClick = index => {
		console.log(toggled)
		setIndex(index)
		setToggled(prevState => !prevState);
	}

	const createTile = index => {
		const tile = document.createElement("div");

		tile.classList.add("tile");

		tile.style.opacity = toggled ? 0 : 1;

		tile.onclick = e => handleOnClick(index);

		return tile;
	}

	const createTiles = quantity => {
		Array.from(Array(quantity)).map((tile, index) => {
			wrapper.appendChild(createTile(index));
		});
	}

	const createGrid = () => {
		wrapper.innerHTML = "";

		const size = document.body.clientWidth > 800 ? 100 : 50;

		const col = Math.floor(document.body.clientWidth / size);
		const ro = Math.floor(document.body.clientHeight / size);

		setColumns(col)
		setRows(ro)

		createTiles(col * ro);
	}

	return (
		<div className="body">
			<div id="tiles" style={{gridTemplateColumns: `repeat(${columns}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)`}}/>
		</div>
	)
}

export default FunPage
