const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        default: null
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
    },
    // rule_example: {
    //     type: Number,
    //     name: String,
    //     binary: Buffer,
    //     living: Boolean,
    //     updated: {
    //         type: Date,
    //         default: Date.now
    //     },
    //     age: {
    //         type: Number,
    //         min: 18,
    //         max: 65
    //     },
    //     mixed: Schema.Types.Mixed,
    //     _someId: Schema.Types.ObjectId,
    //     decimal: Schema.Types.Decimal128,
    //     array: [],
    //     ofString: [String],
    //     ofNumber: [Number],
    //     ofDates: [Date],
    //     ofBuffer: [Buffer],
    //     ofBoolean: [Boolean],
    //     ofMixed: [Schema.Types.Mixed],
    //     ofObjectId: [Schema.Types.ObjectId],
    //     ofArrays: [
    //         []
    //     ],
    //     ofArrayOfNumbers: [
    //         [Number]
    //     ],
    //     nested: {
    //         stuff: {
    //             type: String,
    //             lowercase: true,
    //             trim: true
    //         }
    //     },
    //     map: Map,
    //     mapOfString: {
    //         type: Map,
    //         of: String
    //     },
    //     min: [6, 'Must be at least 6, got {VALUE}'],
    //     max: 12,
    //     required: true,
    //     required: [true, 'Why no bacon?'],
    //     required: function () {
    //         return this.bacon > 3;
    //     },
    //     trim: true,
    //     lowercase: true,
    //     enum: ['Coffee', 'Tea'],
    //     enum: {
    //         values: ['Coffee', 'Tea'],
    //         message: '{VALUE} is not supported'
    //     },
    //     unique: true,
    //     validate: {
    //         validator: function (v) {
    //             return /\d{3}-\d{3}-\d{4}/.test(v);
    //         },
    //         message: props => `${props.value} is not a valid phone number!`
    //     },
    // }
}, {
    timestamps: true
});

const User = mongoose.model("User", UserSchema);

module.exports = User;