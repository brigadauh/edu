itemsMap = new Map<string, any>();
cascadeHttpRequests(items, i, subj) {
	const self = this;
	const item = items[i];
	const url = '/api/getitem/items/' + item.id;
	this.http.get(url).subscribe(data: any) => {
		if (data) {
		  // success
		  self.itemsMap[item.id] = 'found';
		} else {
		  // no data
		  self.itemsMap[item.id] = 'not_found';
		}
		if (i >= items.length - 1) {
			subj.next('success');
		} else {
			self.cascadeHttpRequests(items,i + 1, subj);
		}
	},
	(error) => {
		self.itemsMap[item.id] = 'error';
		if (i >= items.length - 1) {
			subj.next('error');
		} else {
			self.cascadeHttpRequests(items,i + 1, subj);
		}
	});
}
