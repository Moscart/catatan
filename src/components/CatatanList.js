import React from "react";
import CatatanItem from "./CatatanItem";

function CatatanAktif({
	catatans,
	onFormatDate,
	onArsip,
	onDelete,
	searchText,
	isArsip,
}) {
	let dump = catatans.filter((catatan) => {
		if (isArsip) {
			return (
				catatan.archived &&
				catatan.title.toLowerCase().includes(searchText.toLowerCase())
			);
		} else {
			return (
				!catatan.archived &&
				catatan.title.toLowerCase().includes(searchText.toLowerCase())
			);
		}
	});
	return (
		<div>
			<div className="title">{isArsip ? "Arsip" : "Catatan Aktif"}</div>
			<div className={dump.length ? "catatan-list" : "catatan-list-empty"}>
				{dump.length ? (
					dump.map((catatan) => (
						<CatatanItem
							key={catatan.id}
							id={catatan.id}
							{...catatan}
							onFormatDate={onFormatDate}
							onArsip={onArsip}
							onDelete={onDelete}
							text={isArsip ? "Pindah" : "Arsip"}
						/>
					))
				) : (
					<div className="empty">Tidak Ada Catatan</div>
				)}
			</div>
		</div>
	);
}

export default CatatanAktif;
