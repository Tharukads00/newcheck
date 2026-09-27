// ===== YOUR TASK =====
// Complete updateProfile(userName, userBio) so it updates the profile
// card and returns true. Full details are in the problem description.
function updateProfile(userName, userBio) {

    //document elements assigning to variables
    const name = document.querySelector('#profile-name');
    const bioProf = document.querySelector('#profile-bio');
    const card = document.querySelector('.profile-card')

    //name text content update user name input
    name.textContent = userName;

    //bio text content update user bio input
    bioProf.textContent = userBio;

    card.classList.add('updated')
    
    return

}

updateProfile('Jane Doe', 'Software Developer')
