<template>
<v-dialog scrollable v-model="dialog" :width="width" :fullscreen="fullscreen" persistent>
    <template v-slot:activator="{ on, attrs }">
        <div v-bind="attrs" v-on="on" style="display:inline-block;">
            <slot name="activator">
                <v-btn color="primary" dark>
                    Catering
                </v-btn>
            </slot>
        </div>
    </template>
    <v-card tile flat>

        <!-- <v-card-title>
            <h3>Catering Form</h3>
        </v-card-title> -->
        <v-card-text style="padding:0px;">
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-stepper v-model="step" rounded>
                    <v-toolbar>
                        <v-stepper-header style="box-shadow : 0px 0px 0px rgba(0,0,0,0)">
                            <v-stepper-step :complete="step > 1" step="1">
                                Contact / Event Information
                            </v-stepper-step>
                            <v-stepper-step :complete="step > 2" step="2">
                                Food Options
                            </v-stepper-step>
                            <v-stepper-step :complete="step > 3" step="3">
                                Verify
                            </v-stepper-step>
                        </v-stepper-header>
                        <v-btn absolute right depressed @click="closeForm">
                            <v-icon size="32">mdi-close</v-icon>
                        </v-btn>
                    </v-toolbar>

                    <v-stepper-items>
                        <v-toolbar color="success darken-1" v-if="step > 1">

                            <div style="zoom:1.1">{{selectedItems.length}} <span style="opacity:.6;">Items Selected</span></div>
                            <v-spacer />
                            <div style="zoom:1.1">
                                <span style="opacity:.5;margin-right:15px;">Estimate:</span>
                                <span style="zoom:1.5"><span style="opacity:.8">$</span> {{priceEstimate}}</span>
                            </div>
                        </v-toolbar>

                        <v-stepper-content step="1" style="padding:0px;">
                            <!-- <v-img :src=""> -->

                            <v-row no-gutters :style="{ backgroundImage: 'url(' + require('@/assets/IMG_0460.jpg') + ')', backgroundSize: 'contain' }">
                                <v-col sm="2" md="4">

                                </v-col>
                                <v-col>
                                    <v-card style="background-color:rgba(0,0,0,1)" tile>

                                        <v-card-title>
                                            <h3>Catering Request Form</h3>
                                        </v-card-title>
                                        <v-card-text>

                                            <h3>Your Contact Info</h3>

                                            <v-row>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field :rules="[rules.required]" outlined label="Your Name *" v-model="requestor.name" prepend-inner-icon="mdi-account" />
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field :rules="[rules.required, rules.email]" outlined label="Your Email *" v-model="requestor.email" prepend-inner-icon="mdi-at" />
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field :rules="[rules.required]" outlined label="Contact Number *" v-model="requestor.contactNumber" prepend-inner-icon="mdi-phone" />
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                    </v-card>
                                    <v-card tile>
                                        <v-card-title>
                                            <h3>Event Info</h3>
                                        </v-card-title>
                                        <v-card-text>

                                            <v-row>
                                                <v-col cols="12" sm="6">
                                                    <v-radio-group v-model="requestor.serviceType" :rules="[rules.required]" hide-details class="horizontal">
                                                        <v-radio v-for="(serviceType,s) in serviceTypes" :key="`location-${s}`" :value="serviceType.value" :label="serviceType.text">
                                                            <template v-slot:label>
                                                                <div class="radio-label" :class="{zoomed : requestor.serviceType == serviceType.value}">
                                                                    <!-- <v-icon>{{serviceType.icon}}</v-icon>  -->
                                                                    <span style="display:inline-block;margin-left:10px;">{{serviceType.text}}</span>
                                                                </div>
                                                            </template>
                                                        </v-radio>
                                                    </v-radio-group>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field :rules="[rules.required]" outlined label="Event Description *" v-model="requestor.eventDescription" prepend-inner-icon="mdi-information" />
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field persistent-hint :rules="[rules.required]" outlined label="Event Date *" v-model="eventDate" readonly>
                                                        <template v-slot:append-outer>
                                                            <v-menu offset-y left bottom>
                                                                <template v-slot:activator="{ on, attrs }">
                                                                    <v-btn color="secondary" v-bind="attrs" v-on="on" x-large style="position:relative;top:-15px">
                                                                        <v-icon>mdi-calendar</v-icon>
                                                                    </v-btn>
                                                                </template>
                                                                <v-date-picker label="Event Date" v-model="requestor.eventDate" :min="tomorrow"></v-date-picker>
                                                            </v-menu>
                                                        </template>
                                                    </v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">

                                                    <v-text-field persistent-hint :rules="[rules.required]" outlined label="Event Time *" v-model="eventTime" readonly>
                                                        <template v-slot:append-outer>
                                                            <v-menu offset-y left bottom>
                                                                <template v-slot:activator="{ on, attrs }">
                                                                    <v-btn color="secondary" v-bind="attrs" v-on="on" x-large style="position:relative;top:-15px">
                                                                        <v-icon>mdi-clock</v-icon>
                                                                    </v-btn>
                                                                </template>
                                                                <v-time-picker v-model="requestor.eventTime"></v-time-picker>
                                                            </v-menu>
                                                        </template>
                                                    </v-text-field>

                                                </v-col>
                                            </v-row>

                                            <h4>Event Address</h4>
                                            <v-row>
                                                <v-col cols="12" sm="12">
                                                    <v-row>
                                                        <v-col cols="12" sm="6">
                                                            <v-text-field :rules="[rules.required]" outlined label="Street Address *" v-model="requestor.event.streetAddress" prepend-inner-icon="mdi-information" />
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-text-field :rules="[rules.required]" outlined label="City *" v-model="requestor.event.city" prepend-inner-icon="mdi-information" />
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-text-field :rules="[rules.required]" outlined label="State" v-model="requestor.event.state" readonly prepend-inner-icon="mdi-information" />
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-text-field :rules="[rules.required, rules.zipcode]" outlined label="Postal Code" v-model="requestor.event.postalCode" prepend-inner-icon="mdi-information" />
                                                        </v-col>
                                                    </v-row>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                </v-col>

                                            </v-row>

                                        </v-card-text>
                                    </v-card>
                                </v-col>

                            </v-row>

                            <!-- </v-img> -->

                            <!-- <pre>{{template}}</pre> -->

                        </v-stepper-content>
                        <v-stepper-content step="2">
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-text-field type="number" :rules="[rules.required, rules.positiveInteger, rules.minGuests]" outlined label="Estimated Guest Count *" v-model="requestor.guestCount" prepend-inner-icon="mdi-account-group" />
                                </v-col>
                            </v-row>

                            <div v-if="!!template && (template.id=='two-and-two-delivery' || template.id=='two-and-two-catered') ">
                                <v-alert type="info">
                                    {{template.description}}
                                    <small style="display:block;">*{{template.restrictions}}</small>
                                </v-alert>
                                <v-card v-for="(group,g) in groups" :key="`group-${g}`" style="margin-bottom:20px;">
                                    <v-card-title>
                                        <h3>{{group.name}}</h3>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-row no-gutters>

                                            <v-col v-for="(item,i) in group.items" :key="`item-${i}`" cols="12" sm="6" md="3" lg="2">
                                                <v-checkbox :label="item.name" :value="selectedItems.indexOf(item) >= 0" @click="toggleItems(item)" />
                                            </v-col>

                                        </v-row>
                                    </v-card-text>
                                </v-card>
                            </div>

                            <!-- <pre>{{selectedItems}}</pre> -->

                        </v-stepper-content>

                        <v-stepper-content step="3">
                            <v-card>
                                <v-card-title>Confirm Information</v-card-title>
                                <v-card-text>
                                    <v-simple-table>
                                        <template v-slot:default>
                                            <tbody class="confirmation">
                                                <!-- <tr>
                                                    <td>
                                                        <v-icon v-if="$vuetify.breakpoint.smAndUp">mdi-map-marker-circle</v-icon> <label>Location</label>
                                                    </td>
                                                    <td>
                                                        <v-chip>{{ requestor.location }}</v-chip>
                                                    </td>
                                                </tr> -->
                                                <tr>
                                                    <td>
                                                        <v-icon v-if="$vuetify.breakpoint.smAndUp">mdi-account</v-icon> <label>Name</label>
                                                    </td>
                                                    <td>
                                                        <v-chip>{{ requestor.name }}</v-chip>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <v-icon v-if="$vuetify.breakpoint.smAndUp">mdi-at</v-icon><label>Email</label>
                                                    </td>
                                                    <td>
                                                        <v-chip>{{ requestor.email }}</v-chip>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <v-icon v-if="$vuetify.breakpoint.smAndUp">mdi-food</v-icon><label>Service Type</label>
                                                    </td>
                                                    <td>
                                                        <v-chip>{{ selectedServiceType }}</v-chip>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <v-icon v-if="$vuetify.breakpoint.smAndUp">mdi-phone</v-icon><label>Phone</label>
                                                    </td>
                                                    <td>
                                                        <v-chip>{{ requestor.contactNumber }}</v-chip>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <v-icon v-if="$vuetify.breakpoint.smAndUp">mdi-information</v-icon><label>Event Description</label>
                                                    </td>
                                                    <td>
                                                        <v-chip>{{ requestor.eventDescription }}</v-chip>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <v-icon v-if="$vuetify.breakpoint.smAndUp">mdi-account-group</v-icon><label>Estimated Guest Count</label>
                                                    </td>
                                                    <td>
                                                        <v-chip>{{ requestor.guestCount }}</v-chip>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <v-icon v-if="$vuetify.breakpoint.smAndUp">mdi-calendar</v-icon><label>Event Date</label>
                                                    </td>
                                                    <td>
                                                        <v-chip>{{ eventDate }}</v-chip> at <v-chip>{{eventTime}}</v-chip>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <v-icon v-if="$vuetify.breakpoint.smAndUp">mdi-map-marker-circle</v-icon><label>Event Address</label>
                                                    </td>
                                                    <td>
                                                        <v-card style="background-color:#555 !important;border-radius:12px !important;margin:10px 0px; width:auto;">
                                                            <v-card-text>
                                                                {{requestor.event.streetAddress}}<br />
                                                                {{requestor.event.city}}, {{requestor.event.state}} {{requestor.event.postalCode}}
                                                            </v-card-text>
                                                        </v-card>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table>
                                    <v-divider />
                                    <br />
                                    <div class="d-flex flex-wrap">
                                        <v-card v-for="(value,key) in foodGroups" flat :key="`groups-${key}`" style="margin:10px;background-color:#555">
                                            <v-card-title><h3>{{key}}</h3></v-card-title>
                                            <v-card-text>
                                                <v-chip v-for="(item,i) in value" :key="`sel-${i}`">{{item.name}}</v-chip>
                                            </v-card-text>
                                        </v-card>
                                    </div>
                                </v-card-text>
                            </v-card>
                            <br />

                            <v-card>
                                <v-card-title>
                                    <h3>Additional Info</h3>
                                </v-card-title>
                                <v-card-text>
                                    <v-textarea outlined v-model="requestor.specialRequests" label="Special Requests" />
                                </v-card-text>
                            </v-card>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>

                <!-- date
  time -->
                <!-- <pre>{{selectedItems}}</pre> -->
            </v-form>

        </v-card-text>
        <v-card-actions class="d-flex flex-column flex-align-stretch">

            <v-toolbar style="width:100%">
                <v-btn @click="prev" v-if="step > 1" text>Previous</v-btn>
                <v-spacer />
                <v-btn @click="next" v-if="step==1" :disabled="!valid" color="primary">Next: Food Options</v-btn>
                <v-btn @click="next" v-if="step==2" :disabled="!validFoodSelected" color="primary">Next: Verify</v-btn>
                <v-btn @click="submit" v-if="step == 3" color="primary">Finish</v-btn>
            </v-toolbar>
        </v-card-actions>
    </v-card>
</v-dialog>
</template>

<script>
import moment from "moment"
import catering from "@/catering.js"
import locationsMixin from "@/mixins/locations.js"
export default {
    name: 'Menu',
    props: {},
    mixins: [locationsMixin],
    mounted() {

        if(false)
        {
            this.requestor.name = "Zane Hasouris";
            this.requestor.email = "zane.hasouris@gmail.com";
            this.requestor.contactNumber = "8322822551";
            this.requestor.eventDescription = "Graduation";
            this.requestor.guestCount = 25;
            this.requestor.eventDate = "2021-06-04";
            this.requestor.eventTime = "14:00";
            this.requestor.event.streetAddress = "21211 Harvest Thistle";
            this.requestor.event.city = "Richmond";
            this.requestor.event.postalCode = "77406";
            this.requestor.serviceType = this.serviceTypes[0].value;
        }

        this.template = this.templates[0];

    },
    watch: {
        selectedServiceType(newVal) {
            // debugger;
            var results = this.templates.filter(e => e.serviceType === newVal);
            if (results.length > 0) {
                this.template = results[0];
            }
        },
        template(newVal) {

            { //Ensure that the minimum number of guests is set if too low.
                var sortMinPerson = this.template.pricing.sort((a, b) => {
                    a.minPerson < b.minPerson ? -1 : (a.minPerson == b.minPerson ? 0 : 1)
                })
                var minPerson = sortMinPerson[0].minPerson;
                if (this.requestor.guestCount < minPerson) {
                    this.requestor.guestCount = minPerson;
                }
            }

        }
    },
    computed: {
        selectedServiceType() {
            return this.requestor.serviceType;
        },
        validFoodSelected() {
            return this.template.validator(this.selectedItems);
        },
        serviceTypes() {
            return catering.serviceTypes;
        },
        templates() {
            return this.catering.templates;
        },
        groups() {
            return this.catering.foodGroups;
        },
        foodGroups() {
            var groups = {};
            var self = this;
            this.selectedItems.forEach(e => {
                var groupName = null;
                for (var grp in self.groups) {
                    var group = self.groups[grp]
                    if (group.items.indexOf(e) >= 0) {
                        groupName = group.name
                        break;
                    }
                }
                if (!!groupName) {
                    if (!groups[groupName]) {
                        groups[groupName] = [];
                    }
                    groups[groupName].push(e);
                }
            });
            return groups;
        },
        fullscreen() {
            switch (this.$vuetify.breakpoint.name) {
                case "xs":
                case "sm":
                case "md":
                    return true;
                case "lg":
                case "xl":
                    return false;
            }
        },
        width() {
            switch (this.$vuetify.breakpoint.name) {
                case "xs":
                    return "100%";
                case "sm":
                    return "100%";
                case "md":
                    return "100%";
                case "lg":
                    return 1024;
                case "xl":
                    return 1440;
            }
        },
        tomorrow() {
            return moment().add(1, "days").format("YYYY-MM-DD");
        },
        priceEstimate() {
            return this.template.calculatePrice(this.requestor.guestCount, this.selectedItems);
            var total = 0;
            this.selectedItems.forEach(e => total += e.unitPrice * this.requestor.guestCount)
            return total;
        },

        rules() {
            var self = this;
            return {
                required: (val) => (!!val) ? true : 'This field is required',
                email: value => {
                    if (typeof (value) == typeof ("") && value.length > 0) {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return pattern.test(value) || 'Invalid e-mail.';
                    }
                    return "Not found";
                },
                positiveInteger: value => {
                    return (!isNaN(value) && value > 0 && parseInt(value) == value) ? true : "This field should be a number greater than 0.";
                },
                zipcode: value => {
                    return (!isNaN(value)) ? true : "Please enter a valid US postal code.";
                },
                businessHours: value => {
                    // debugger;
                    return true;
                },
                minGuests: value => {
                    if (!self.template) {
                        return true;
                    }
                    var sortMinPerson = self.template.pricing.sort((a, b) => {
                        a.minPerson < b.minPerson ? -1 : (a.minPerson == b.minPerson ? 0 : 1)
                    })
                    // debugger;
                    var minPerson = sortMinPerson[0].minPerson;
                    return value >= minPerson ? true : `This option requires at least ${minPerson} guests.`;
                }
            }
        },
        eventTime() {
            if (!!this.requestor.eventTime) {
                var d = moment(`0000-01-01T${this.requestor.eventTime}`);
                return d.format("hh:mm A");
            }
            return null;
        },
        eventDate() {
            if (!!this.requestor.eventDate) {
                var d = moment(`${this.requestor.eventDate}T00:00:00`);
                return d.format("MMM DD YYYY");
            }
            return null;
        }
    },
    data: () => ({
        step: 1,
        valid: false,
        dialog: false,
        selectedItems: [],
        template: null,
        requestor: {
            name: null,
            email: null,
            contactNumber: null,
            guestCount: 0,
            serviceType: null,
            specialRequests: null,
            eventDate: null,
            eventTime: null,
            eventDescription: null,
            cateringTemplate: "",
            serviceType: null,
            event: {
                streetAddress: null,
                state: "Texas",
                city: null,
                postalCode: null,
            }
        },

        catering: catering,
    }),
    methods: {
        submit() {

        },
        next() {
            this.valid = this.$refs.form.validate();
            if (this.valid) {
                this.step++;
            }
        },
        prev() {
            if (this.step > 1) {
                this.step--
            }
        },
        closeForm() {
            this.dialog = false;
        },
        toggleItems(item) {
            this.selectedItems.indexOf(item) >= 0 ?
                this.selectedItems.splice(this.selectedItems.indexOf(item), 1) :
                this.selectedItems.push(item);
        }
    }
}
</script>

<style lang="scss">
.confirmation i {
    margin-right: 10px;
    opacity: .5
}

.horizontal *[role='radiogroup'] {
    display: flex !important;
    flex-direction: row !important;

    >* {
        // margin-right: 10px;
    }

    .v-radio {
        margin: 0px 10px 0px 0px !important;
    }
}
.radio-label
{
    transition: all .3s ease-in-out;
    margin-right:20px;
}
.zoomed
{
    // zoom:1.3;
}
</style>
