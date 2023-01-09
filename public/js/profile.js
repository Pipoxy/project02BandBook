const newWorkoutHandler = async (event) => {
	event.preventDefault();

	const name = document.querySelector('#user-workout').value.trim();
	const sets = document.querySelector('#user-sets').value.trim();
	const reps = document.querySelector('#user-reps').value.trim();
	const weight = document.querySelector('#user-weight').value.trim();

	if (name && sets && reps && weight) {
		console.log(name,sets,reps,weight);
		const response = await fetch(`/api/workout`,{
			method: "POST",
			body: JSON.stringify({ name,sets,reps,weight }),
			headers: { "Content-Type": "application/json" }
		});
		console.log(response);

		if (response.ok) {
			// document.location.replace('/profile');
			console.log("It Worked");
		} else {
			alert('Failed to create workout');
		}
	}
};

const delButtonHandler = async (event) => {
	if (event.target.hasAttribute('data-id')) {
		const id = event.target.getAttribute('data-id');

		const response = await fetch(`/api/workout/${id}`,{
			method: 'DELETE',
		});

		if (response.ok) {
			document.location.replace('/profile');
		} else {
			alert('Failed to delete workout');
		}
	}
};

document
	.querySelector('.new-workout-form')
	.addEventListener('submit',newWorkoutHandler);

document
	.querySelector('.blog-list')
	.addEventListener('click',delButtonHandler);
