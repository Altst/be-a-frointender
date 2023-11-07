
function User(props) {
    return (
        <tr>
            <th scope="row">{props.index + 1}</th>
            <td>{props.user.name}</td>
            <td>{props.user.username}</td>
            <td>{props.user.email}</td>
            <td>{props.user.address.street + " " + props.user.address.suite}</td>
            <td>{props.user.phone}</td>
            <td>{props.user.website}</td>
            <td>{props.user.company.name}</td>
            <td><button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => props.getAlbums(props.user.id)}>Album</button></td>
        </tr>
    );
}

export default User;
