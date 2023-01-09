const newWorkoutHandler = async (event) => {
	event.preventDefault();
	const workout = document.querySelector('#user-workout').value.trim();
	const sets = document.querySelector('#user-sets').value.trim();
	const reps = document.querySelector('#user-reps').value.trim();
	const weight = document.querySelector('#user-weight').value.trim();

	if (workout && sets && reps && weight) {
		console.log(workout,sets,reps,weight);
		const response = await fetch(`/api/workout`,{
			method: "POST",
			body: JSON.stringify({ workout,sets,reps,weight })
		});
		console.log(response);

		if (response.ok) {
			document.location.replace('/login');
			console.log(response);
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
