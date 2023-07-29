import React from "react";

function ContactItem({
	id,
	title,
	createdAt,
	body,
	onFormatDate,
	onArsip,
	text,
	onDelete,
}) {
	return (
		<div>
			<div className="catatan-item">
				<div className="catatan-judul">{title}</div>
				<div className="catatan-tanggal">{onFormatDate(createdAt)}</div>
				<div className="catatan-isi">{body}</div>
			</div>
			<div className="aksi">
				<button className="delete" onClick={() => onDelete(id)}>
					Delete
				</button>
				<button className="arsip" onClick={() => onArsip(id)}>
					{text}
				</button>
			</div>
		</div>
	);
}

export default ContactItem;
