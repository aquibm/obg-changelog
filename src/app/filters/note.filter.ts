declare var _;

export function notesFilter() {
	return (notes: any, selectedStatus: string) => {

		if (selectedStatus !== 'Show All') {
			notes = _.filter(notes, (note: any) => {
				return note.completionStatus === selectedStatus;
			});
		}

		return _.sortBy(notes, (note: any) => {
			return note.dateCreated;
		}).reverse();
	};
}
