const Address = ({ address, className }) => {
    return address.split(',').map((address, index, array) =>
        <p
            className={className}
            key={address}
        >{address}{index < (array.length - 1) && ','}</p>)
}

export default Address