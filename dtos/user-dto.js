module.exports = class UserDto {
    firstName;
    lastName;
    email;
    id;
    photoId;
    admin;
    isActivated;

    constructor(model){
        this.firstName = model.firstName;
        this.lastName = model.lastName;
        this.email = model.email;
        this.photoId = model.photoId
        this.admin = model.admin;
        this.id = model._id;
        this.isActivated = model.isActivated;
    }
}
