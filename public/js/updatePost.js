const updateButtonHandler = async (event) => {
    console.log("test");
        const id = document.getElementById('post-id').value;
        const title = document.getElementById('project-name').value.trim();
        const content = document.getElementById('project-desc').value.trim();

        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({title, content}),
            headers: {
                'Content-Type': 'application/json',
              },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update post');
        }
};

document.querySelector(".updateBtn").addEventListener("click", updateButtonHandler);
