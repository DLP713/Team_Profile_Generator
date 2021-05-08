var cards = []

generateHTML = (team) => {
    team.forEach((teamMember) => {
        if (teamMember.getRole() === 'Manager'){
            makeManager(teamMember)
        } else if (teamMember.getRole() === 'Engineer') {
            makeEngineer(teamMember)
        } else if (teamMember.getRole() === 'Intern') {
            makeIntern(teamMember)
        } 
    })

return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Page</title>
    <link rel="icon" href="../assets/images/icon.png" type="image/png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/806779c7fe.js" crossorigin="anonymous"></script>
</head>
<body>
    <!-- Heading -->
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3">
                <h1 class="text-center"><i class="fas fa-users"></i> My Team</h1>
            </div>
        </div>
    </div>
    <!-- Section for Cards -->
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <!-- Insert Cards Here -->
                ${cards.join('')}
            </div>
        </div>
    </div>
</body>
</html>
`;
}

function makeManager (manager){
    cards.push( `
    <div class="card">
    <div class="card-header">
        <h2 class="card-title">${manager.name}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot"></i> Manager</h5></h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item"><strong>ID: </strong>${manager.id}</li>
            <li class="list-group-item"><strong>Email: </strong><a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item"><strong>Office Number: </strong>${manager.officeNumber}</li>
        </ul>
    </div>
</div>
    `)
}
function makeEngineer (engineer){
    cards.push( `
    <div class="card">
    <div class="card-header">
        <h2 class="card-title">${engineer.name}</h2>
        <h3 class="card-title"><i class="fas fa-cog"></i> Engineer</h5></h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item"><strong>ID: </strong>${engineer.id}</li>
            <li class="list-group-item"><strong>Email: </strong><a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item"><strong>Github: </strong><a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
    </div>
</div>
    `)
}
function makeIntern (intern){
    cards.push( `
    <div class="card">
    <div class="card-header">
        <h2 class="card-title">${intern.name}</h2>
        <h3 class="card-title"><i class="fas fa-graduation-cap"></i> Intern</h5></h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item"><strong>ID: </strong>${intern.id}</li>
            <li class="list-group-item"><strong>Email: </strong><a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item"><strong>School: </strong>${intern.school}</a></li>
        </ul>
    </div>
</div>
    `)
}

module.exports = generateHTML;