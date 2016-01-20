import { FirebaseGateway } from '../services/firebase.gateway.service';
declare var swal;

export class MainController {
	public notes: any;
	public statusFilter: any;
	public showNewNoteForm: boolean = false;
	public newNote: any;

	/* @ngInject */
	constructor(firebaseGateway: FirebaseGateway) {
		this.notes = firebaseGateway.getArray('releaseNotes');
		this.clearNewNote();

		this.statusFilter = {
			options: [
				'Show All',
				'To Do',
				'In Progress',
				'Done'
			],
			selected: 'Show All'
		};
	}

	public saveNote(note: any): void {
		this.notes.$save(note);
	}

	public removeNote(note: any): void {
		swal({
			title: 'Are you sure?',
			text: 'You will not be able to recover this note!',
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#DD6B55',
			confirmButtonText: 'Yes, remove it!',
			closeOnConfirm: true
		}, () => {
			this.notes.$remove(note);
		});
	}

	public submitNewNote(): void {
		var date = new Date();

		this.notes.$add({
			sharepointId: this.newNote.sharepointId,
			vsoId: this.newNote.vsoId,
			completionStatus: this.newNote.completionStatus,
			dateCreated: date.toISOString(),
			summary: this.newNote.summary
		});

		this.clearNewNote();
	}

	public toggleNewNote(): void {
		this.showNewNoteForm = !this.showNewNoteForm;
	}

	public parseDate(isoString: string): Date {
		return new Date(isoString);
	}

	public getCompletionStatus(completionStatus: string): string {
		if (completionStatus === 'To Do') {
			return 'red';
		}

		if (completionStatus === 'In Progress') {
			return 'yellow';
		}

		if (completionStatus === 'Done') {
			return 'green';
		}

		return 'blue';
	}

	private clearNewNote(): void {
		this.newNote = {
			sharepointId: '',
			vsoId: '',
			summary: '',
			completionStatus: 'Done'
		};

		this.showNewNoteForm = false;
	}
}
