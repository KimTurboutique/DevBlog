const updateButtonHandler = async (event) => {
    console.log("test");
    if (event.target.hasAttribute('post-id')) {
        const id = event.target.getAttribute('post-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'UPDATE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update post');
        }
    }
};

const updateBtns = [...document.getElementsByClassName('updateBtn')]
updateBtns.forEach((element) => {
    element.addEventListener("click", updateButtonHandler)
}); 