import React, { useRef } from "react";
export const Crossword = ({ columns, handleSubmit, inputRef }) => {
	return (
		<>
			<div className="puzzle">
				{columns.map((column, columnIndex) => (
					<div key={columnIndex} className="puzzle-column">
						<div>{columnIndex + 1}</div>
						{column.map((cell, rowIndex) => {
							if (!cell.answer) {
								return (
									<div key={rowIndex} className="puzzle-cell-empty">
										&nbsp;
									</div>
								);
							} else {
								return cell.answer.split("").map((letter, letterIndex) => {
									if (cell.solved) {
										return (
											<div
												key={letterIndex}
												className="puzzle-cell puzzle-cell-solved"
											>
												{letter}
											</div>
										);
									} else {
										return (
											<div key={letterIndex} className="puzzle-cell">
												&nbsp;
											</div>
										);
									}
								});
							}
						})}
					</div>
				))}
			</div>
			<div className="puzzle-questions">
				<div>
					{columns.map((column, columnIndex) => (
						<div key={columnIndex} style={{ display: "flex", width: "300px" }}>
							<span>{columnIndex + 1}</span>
							<span>
								{column.map((cell, rowIndex) => {
									if (!cell.question) {
										return null;
									}
									let style = {};
									if (cell.solved) {
										style = { backgroundColor: "lightgreen" };
									}
									return (
										<div key={rowIndex} style={style}>
											{cell.question}
										</div>
									);
								})}
							</span>
						</div>
					))}
				</div>
				<div>
					<form onSubmit={handleSubmit}>
						<input type="text" ref={inputRef} />
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
		</>
	);
};
