import { useState } from "react";
export const Cryptex = ({ columns }) => {
	const col = [];
	columns.forEach((column) => {
		const newColumn = [];
		column.forEach((cell) => {
			if (!cell.answer) {
				newColumn.push("");
			} else {
				newColumn.push(...cell.answer.split(""));
			}
		});
		col.push(newColumn);
	});
	const defaultColumns = col;
	const [cryptexColumns, setCryptexColumns] = useState(defaultColumns);
	const shiftUp = (index) => {
		console.log(index);
		setCryptexColumns((prevColumns) => {
			const newColumns = [...prevColumns];
			const columnToShift = [...newColumns[index]];
			const firstCell = columnToShift.shift();
			columnToShift.push(firstCell);
			newColumns[index] = columnToShift;
			return newColumns;
		});
	};
    const shiftDown = (index) => {
		
		setCryptexColumns((prevColumns) => {
			const newColumns = [...prevColumns];
			const columnToShift = [...newColumns[index]]
			const lastCell = columnToShift.pop();
			columnToShift.unshift(lastCell);
			newColumns[index] = columnToShift;
			return newColumns;
		});
	};

    const resetColumns = () => {
        setCryptexColumns(defaultColumns);
    }

    return (
		<>
			<div className="puzzle">
				{cryptexColumns.map((column, columnIndex) => (
					<div key={columnIndex} className="puzzle-column">
						<div>{columnIndex + 1}</div>
						<div>
							<button onClick={() => shiftUp(columnIndex)}>Up</button>
						</div>
						{column.map((cell, rowIndex) => {
							if (cell.length === 0) {
								return (
									<div key={rowIndex} className="puzzle-cell-empty">
										&nbsp;
									</div>
								);
							} else {
								return (
									<div
										key={rowIndex}
										className="puzzle-cell puzzle-cell-solved"
									>
										{cell}
									</div>
								);
							}
						})}
						<div>
							<button onClick={() => shiftDown(columnIndex)}>Down</button>
						</div>
					</div>
				))}
			</div>
            <div>
                <button onClick={resetColumns}>Reset</button>
            </div>
        </>
    );
}
