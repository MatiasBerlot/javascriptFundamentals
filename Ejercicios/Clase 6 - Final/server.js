(function (localStorage, $, setTimeout, Promise, JSON, Math, Number, Object) {
    $.ajax = function (url, options) {

        if (url.indexOf("/contacts") == 0) {

            switch (options.method) {
                case "POST":
                    return createContact(options.data.contact);
                    break;
                case "PUT":
                    return updateContact(options.data.contact);
                    break;
                case "DELETE":
                    return deleteContact(getUrlId(url));
                    break;
                case "GET":
                default:
                    return getContacts(getUrlId(url));
                    break;
            }
        }
        else {
            return throwServerError();
        }

    }
    
    function getContactsObject(){
        var contacts = localStorage.getItem("contacts");
        return JSON.parse(contacts || "{}");
    }
    
    function setContactsObject(contacts){
        localStorage.setItem("contacts", JSON.stringify(contacts));   
    }

    function getUrlId(url) {
        var idPart = url.replace("/contacts", "");

        if (idPart.indexOf('/') != -1) {
            return idPart.replace('/', "");
        } else {
            return null;
        }
    }

    function updateContact(contact) {
        return simulateServerCall().then(function () {
            if (!contact || !contact.id || !getContactsObject()[contact.id]) {
                throw "Contact could not be found";
            }

            var contacts = getContactsObject();
            contacts[contact.id] = contact;
            setContactsObject(contacts);
            return contact;
        });
    }

    function deleteContact(contactId) {
        return simulateServerCall().then(function () {
            if (contactId) {
                var contacts = getContactsObject();
                delete contacts[contactId];
                setContactsObject(contacts);
            } else {
                localStorage.clear();
                setContactsObject({});
            }
            return true;
        });
    }

    function getContacts(contactId) {
        return simulateServerCall().then(function () {

            if (!contactId) {
                var contactIds = Object.getOwnPropertyNames(getContactsObject());

                var contacts = [];
                contactIds.forEach(function (id) {
                    contacts.push(getContactsObject()[id]);
                });

                return contacts;
            }
            else {
                return getContactsObject()[contactId];
            }
        });
    }


    var createContact = (function () {
        var ids = Object.getOwnPropertyNames(getContactsObject());
        var contactId = 0;
        ids.forEach(function(id){
            contactId = (Number.parseInt(id) > contactId ? Number.parseInt(id) : contactId)
        });
        
        return function (contact) {

            return simulateServerCall().then(function () {

                if (contact) {
                    contact.contactId = ++contactId;
                    var contacts = getContactsObject();
                    contacts[contactId] = contact;
                    setContactsObject(contacts);

                    return contact;
                }
                else {
                    throw "Contact cannot be null";

                }
            });
        }
        
    } ());

    function simulateServerCall(rejection) {
        var promise = new Promise(function (resolve, reject) {

            setTimeout(function () {

                var error = rejection || (Math.random() <= 0.1);

                if (!error) {
                    resolve();
                }
                else {
                    reject("Internal Server Error");
                }

            }, Math.random() * 10);

        });

        return promise;
    }

    function throwServerError() {
        return simulateServerCall(true);
    }

} (localStorage, $, setTimeout, Promise, JSON, Math, Number, Object));