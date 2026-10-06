import { puzzleColumns, cryptexAnswer } from "../../data/answers";
import "./Puzzle.css";
import { useRef, useState } from "react";
import { Crossword } from "./components/Crossword";
import { Cryptex } from "./components/Cryptex";
export const Puzzle = () => {
	const [columns, setColumns] = useState(puzzleColumns);
	const inputRef = useRef<HTMLInputElement>(null);
	const [cryptexMode, setCryptexMode] = useState(false);
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const inputValue = inputRef.current?.value.toUpperCase();
		if (!inputValue) {
			return;
		}
		if (inputValue.split(" ").join() === cryptexAnswer) {
			setColumns((prevColumns) =>
				prevColumns.map((column) =>
					column.map((cell) => {
						return { ...cell, solved: true };
					}),
				),
			);
			setCryptexMode(true);
			return;
		}
		setColumns((prevColumns) =>
			prevColumns.map((column) =>
				column.map((cell) => {
					if (cell.answer && cell.answer.toUpperCase() === inputValue) {
						return { ...cell, solved: true };
					}
					return cell;
				}),
			),
		);
		inputRef.current!.value = "";
	};
	return (
		<section>
			<div>Best solved on a desktop computer</div>
			<div>
				<b>
					<i>
						An orange male ghost, Lord he who shall not be named, and Gotham's
						clown prince team up against Hyrule's greatest warrior.
					</i>
				</b>
			</div>
			{cryptexMode ? (
				<Cryptex columns={columns} />
			) : (
				<Crossword
					columns={columns}
					handleSubmit={handleSubmit}
					inputRef={inputRef}
				/>
			)}
		</section>
	);
};
