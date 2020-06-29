const Agency = require('../models/agency');
const Client = require('../models/client');


// AGENCY NEW
exports.addNew = async (req, res) => {
    try {
        const agency = new Agency({
            name: req.body.name,
            address_1: req.body.address_1,
            address_2: req.body.address_2,
            state: req.body.state,
            city: req.body.city,
            phone_number: req.body.phone_number
        });
        const savedAgency = await agency.save();

        if (savedAgency._id) {
            const client = new Client({
                agency_id: savedAgency._id,
                name: req.body.client_name,
                email: req.body.client_email,
                phone_number: req.body.client_phone_number,
                total_bill: req.body.client_total_bill
            });

            const savedClient = await client.save();

            if (savedClient._id) {
                res.status(201).json({
                    msg: "New Agency/Client created",
                    body: {
                        agency_id: savedAgency._id,
                        client_id: savedClient._id
                    }
                });
            } else {
                res.status(500).json({
                    msg: "Error saving client details",
                    body: null
                });
            }
        } else {
            res.status(500).json({
                msg: "Error saving agency details",
                body: null
            });
        }
    } catch (error) {
        res.status(500).json({
            msg: error,
            data: null
        });
    }
}

// ADD NEW CLIENT TO AGENCY
exports.addClient = async (req, res) => {
    const _id = req.params.agency_id;

    try {
        const client = new Client({
            agency_id: _id,
            name: req.body.client_name,
            email: req.body.client_email,
            phone_number: req.body.client_phone_number,
            total_bill: req.body.client_total_bill
        });

        const savedClient = await client.save();

        if (savedClient._id) {
            res.status(201).json({
                msg: "New Client Added",
                body: {
                    agency_id: _id,
                    client_id: savedClient._id
                }
            });
        } else {
            res.status(500).json({
                msg: "Error saving client details",
                body: null
            });
        }
    } catch (error) {
        res.status(500).json({
            msg: error,
            data: null
        });
    }
}

// UPDATE CLIENT
exports.update = async (req, res) => {
    const _id = req.params.client_id;

    try {
        const updateOps = {};
        for (const ops of req.body) {
            updateOps[ops.propName.substr(7)] = ops.value;
        }

        const data = await Client.where({ _id }).updateOne({ _id }, { $set: updateOps });

        if (data.nModified != 0) {
            res.status(201).json({
                msg: "Client data updated",
                data: data
            });
        } else {
            res.status(500).json({
                msg: "Client data updation failed",
                data: null
            });
        }
    } catch (error) {
        res.status(500).json({
            msg: error,
            data: null
        });
    }
}


// AGENCY GET SINGLE
exports.getSingle = async (req, res) => {
    const _id = req.params.agency_id;
    try {
        const agency = await Agency.findById(_id).select('name');

        if (agency) {
            const clients = await Client.find({ agency_id: agency._id }).select('name total_bill');

            let data = agency.toObject();

            data.clients = clients

            res.status(200).json({
                msg: "Agency Detail",
                data: data
            });
        } else {
            res.status(204).json({
                msg: "No Agency Found",
                data: null
            });
        }
    } catch (error) {
        res.status(500).json({
            msg: error,
            data: null
        });
    }
}
