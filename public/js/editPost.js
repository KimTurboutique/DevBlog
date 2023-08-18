const delButtonHandler = async (event) => {
    console.log("test");
    if (event.target.hasAttribute('post-id')) {
        const id = event.target.getAttribute('post-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post');
        }
    }
};

const deleteBtns = [...document.getElementsByClassName('deleteBtn')]
deleteBtns.forEach((element) => {
    element.addEventListener("click", delButtonHandler)
}); 