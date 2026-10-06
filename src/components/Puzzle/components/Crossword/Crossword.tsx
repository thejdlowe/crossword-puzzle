export const Crossword = ({
	columns,
	handleSubmit,
	inputRef,
}: {
	columns: any[];
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	inputRef: React.RefObject<HTMLInputElement | null>;
}) => {
	return (
		<>
			<div>
				Enter the answers into the text box below. When you find the next step,
				enter it into the text box.
			</div>
			<div className="puzzle">
				{columns.map((column, columnIndex) => (
					<div key={columnIndex} className="puzzle-column">
						<div>{columnIndex + 1}</div>
						{column.map(
							(cell: { answer: string; solved: boolean }, rowIndex: number) => {
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
							},
						)}
					</div>
				))}
			</div>
			<div className="puzzle-questions">
				<div>
					{columns.map((column, columnIndex) => (
						<div key={columnIndex} style={{ display: "flex", width: "300px" }}>
							<span>{columnIndex + 1}</span>
							<span>
								{column.map(
									(
										cell: { question: string; solved: boolean },
										rowIndex: number,
									) => {
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
									},
								)}
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
