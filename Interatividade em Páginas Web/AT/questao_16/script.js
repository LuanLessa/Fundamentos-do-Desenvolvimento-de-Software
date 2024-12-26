const likeIcon = document.getElementById("likeIcon");
const commentIcon = document.getElementById("commentIcon");
const saveIcon = document.getElementById("saveIcon");
const postImage = document.getElementById("postImage");
const likeCountElement = document.getElementById("likeCount");
const footerContainer = document.querySelector(".footer-container");

let likes = 39784;
let isLiked = false;
let isCommentInputVisible = false;

function toggleLike() {
    if (!isLiked) {
        likes++;
        likeIcon.textContent = "favorite";
        likeIcon.style.color = "red";
    } else {
        likes--;
        likeIcon.textContent = "favorite_border";
        likeIcon.style.color = "black";
    }
    isLiked = !isLiked;
    likeCountElement.textContent = `${likes.toLocaleString("pt-BR")} curtidas`;
}

function showCommentInput() {
    if (isCommentInputVisible) {
        const existingCommentControls = document.querySelector(".comment-controls");
        if (existingCommentControls) {
            existingCommentControls.remove();
        }
        isCommentInputVisible = false;
        return;
    }

    const commentControls = document.createElement("div");
    commentControls.classList.add("comment-controls");

    const hr = document.createElement("hr");
    commentControls.appendChild(hr);

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Adicione um comentário...";
    input.style.display = "block";
    input.style.margin = "10px auto";
    input.style.width = "90%";
    input.style.padding = "5px";

    const button = document.createElement("button");
    button.textContent = "Postar";
    button.style.display = "block";
    button.style.margin = "10px auto";
    button.style.padding = "5px 10px";

    button.addEventListener("click", () => {
        if (input.value.trim() !== "") {
            let commentSection = document.querySelector(".comment-section");
            if (!commentSection) {
                commentSection = document.createElement("div");
                commentSection.classList.add("comment-section");

                const hrComments = document.createElement("hr");
                commentSection.appendChild(hrComments);

                const title = document.createElement("p");
                title.textContent = "Comentários";
                title.style.fontWeight = "bold";
                title.style.fontSize = "small";
                title.style.textAlign = "center";
                title.style.padding = "8px 0";
                commentSection.appendChild(title);

                footerContainer.appendChild(commentSection);
            }

            const comment = document.createElement("p");
            comment.textContent = input.value;
            comment.style.fontSize = "small";
            comment.style.padding = "8px 0";
            commentSection.appendChild(comment);
        }

        input.value = "";
        commentControls.remove();
        isCommentInputVisible = false;
    });

    commentControls.appendChild(input);
    commentControls.appendChild(button);

    footerContainer.appendChild(commentControls);
    isCommentInputVisible = true;
}

commentIcon.addEventListener("click", showCommentInput);

likeIcon.addEventListener("click", toggleLike);

postImage.addEventListener("dblclick", toggleLike);

saveIcon.addEventListener("click", () => {
    if (saveIcon.textContent === "bookmark_border") {
        saveIcon.textContent = "bookmark";
        alert("Post salvo com sucesso!");
    } else {
        saveIcon.textContent = "bookmark_border";
    }
});
