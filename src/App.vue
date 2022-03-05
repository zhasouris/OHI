<template>
  <v-app>
    <a id="top" name="top" />


    <v-app-bar fixed color="white" light prominent app>
    <v-container style="padding:0px 12px">

      <v-row>

        <v-col class="shrink" cols="4" sm="3">
          <v-img width="100" :src="require('@/assets/logo.jpg')" contain/>
        </v-col>

        <v-col class="grow d-flex align-center" cols="8" sm="9">
          <v-row>
            <v-col cols="12" sm="9">
              <v-btn v-scroll-to="'#top'" text :large="$vuetify.breakpoint.mdAndUp" :small="$vuetify.breakpoint.smAdnDown" >Welcome</v-btn>
              <v-btn v-scroll-to="'#locations'" text  :large="$vuetify.breakpoint.mdAndUp" :small="$vuetify.breakpoint.smAdnDown" >Locations</v-btn>
              <v-btn v-scroll-to="'#food-menu'" text :large="$vuetify.breakpoint.mdAndUp" :small="$vuetify.breakpoint.smAdnDown" >Menu</v-btn>

            </v-col>
            <v-col cols="12" sm="3" v-if="$vuetify.breakpoint.smAndUp" class="d-flex justify-end">
              <v-btn href="https://www.facebook.com/OldHickoryInn" target="_blank" dark depressed color="#3b5998" :x-large="$vuetify.breakpoint.mdAndUp" :small="$vuetify.breakpoint.smAndDown" icon ><v-icon class="prepend-icon">mdi-facebook</v-icon></v-btn>
              <v-btn href="https://www.instagram.com/oldhickoryinntx/" target="_blank" dark depressed color="#F56040" :x-large="$vuetify.breakpoint.mdAndUp" :small="$vuetify.breakpoint.smAndDown" icon><v-icon class="prepend-icon">mdi-instagram</v-icon></v-btn>
            </v-col>
          </v-row>
        </v-col>

      </v-row>
    </v-container>

      <!-- <v-alert
        prominent
        type="warning"
        app
      >
      
        <v-row align="center">
          <v-col class="grow">
            <h3>Technical Difficulties</h3>
            <div>Our hosting provider is currently experiencing technical difficulties.</div>
          </v-col>

        </v-row>
      </v-alert> -->


    </v-app-bar>

    <v-main style="padding-top:110px;">
      <router-view></router-view>

      <!-- <v-btn fixed bottom right>
        <v-img  width="75" height="75" :src="require('@/assets/Old-Hickory-Inn-Logo-for-ad.jpg')" contain/>
      </v-btn> -->

      <!-- <v-img class="darken-img more-2" :src="require('@/assets/brisket.jpg')"> -->

        <div>

          <v-container class="body-container">


            <v-row>
              <v-col cols="12" sm="8">
                <v-card flat class="darken-card fill-height d-flex flex-column" dark>
                  <v-card-title>
                    Welcome
                  </v-card-title>
                  <v-card-text>
                    <p>
                      Since 1963 Old Hickory Inn has been catering to the Houston Texas area with mouth-watering barbecue.  Our customers love our service and hospitality and fall in love with our down home texas style cooking.  We use only the freshest ingredients that makes our food second to none. 
                    </p>
                    <p>
                      So whether its our delicious Chopped Beef Baker, our fall-off-the-bone Baby Back Ribs our Slow Smoked Barbecue Brisket or any one of our other delicious fixings you can be sure that you are getting Great Texas Barbecue at a good price.
                    </p>
                  </v-card-text>
                </v-card>
              </v-col>
              <!-- <v-col cols="12" sm="8">
                  <v-card>
                    <v-img height="150" :src="require('@/assets/turkey.jpg')" class="white--text align-end">
                      <v-card-title class="text-shadow">
                        Holiday Turkeys
                      </v-card-title>
                    </v-img>

                    <v-card-text>
                      <p>
                        We take great pride in providing turkeys for families each year with the choice of a Cajun Fried or Hickory Smoked Bird.
                        Each turkey averages 15 lbs and will feed 10 + people. The Cajun Fried is injected with an inhouse recipe and then fried in pure peanut oil.
                        The recipe does provide a bit of heat but should be tame enough for the entire family. The Smoked Turkeys are purely flavored by a slow smoke with Hickory wood.
                      </p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn block href="https://turkeyoldhickoryinn.com/home" target="_blank" x-large dark color="red"><v-icon class="prepend-icon" >mdi-cart</v-icon> Order Your Cajun Fried Turkey</v-btn>
                    </v-card-actions>
                  </v-card>
              </v-col> -->
              <v-col cols="12" sm="4">
                  <v-card class="fill-height d-flex flex-column">
                    <v-img height="150" :src="require('@/assets/food1.jpg')" class="white--text align-end">
                      <v-card-title class="text-shadow">
                        Online Ordering
                      </v-card-title>
                    </v-img>
                    <v-card-text class="flex-grow">
                      <p>
                        We are currently offering many options for ordering. Call in, curbside, limited dine-in or online. Provide the coupon code <strong>OHI10</strong> upon checkout on the online for a 10% discount your entire order
                      </p>
                    </v-card-text>
                    <v-card-actions class="flex-shrink">
                        <v-btn block href="https://ordercounter.com/oldhickorybbq/select_items.php" target="_blank" x-large dark color="red"><v-icon class="prepend-icon" >mdi-food-fork-drink</v-icon> Order Now</v-btn>
                    </v-card-actions>
                  </v-card>
              </v-col>
            </v-row>
            
          </v-container>
        </div>
      
      <!-- </v-img> -->

      
      <!-- <v-parallax :src="require('@/assets/IMG_0460.jpg')" height="400" /> -->
      <v-parallax :src="require('@/assets/IMG_0569.jpg')" height="400" class="inner-shadow" />

      <a id="locations" name="locations"/>
      <!-- <div class="red">
        <v-container>
          "Real Old Fashioned Barbecue at it's best."
        </v-container>
      </div> -->


      <v-img>

        <v-container class="body-container">
          <h1>Locations</h1>
          <v-row>
            <v-col cols="12" sm="6" md="4" v-for="(loc,l) in locations" :key="l">
              <v-card>
                <a :href="loc.mapUrl" target="_blank">
                  <v-img :src="loc.mapImage" height="200" class="align-end">
                    <v-card-title class="text-glow">
                      <h3 style="color:black">{{loc.name}}</h3>
                    </v-card-title>
                  </v-img>
                </a>
                <v-card-text>
                  <div>
                    <b>{{loc.address.line1}}</b><br />
                    <span>{{loc.address.city}}, {{loc.address.postalCode}}</span><br />
                  </div>
                </v-card-text>

                <v-card-actions v-for="(number, n) in loc.phoneNumbers" :key="`phones-${n}`">
                    <v-btn block :href="`tel:${number.number}`">
                      <v-icon class="prepend-icon" >mdi-phone</v-icon>{{number.number}} ({{number.type}})
                    </v-btn>
                </v-card-actions>
                <v-card-actions>

                    <v-btn block :href="loc.mapUrl" target="_blank">
                      <v-icon class="prepend-icon" >mdi-map-marker</v-icon> Directions
                    </v-btn>

                </v-card-actions>

              </v-card>

            </v-col>

            <br />

          </v-row>
        </v-container>

      </v-img>

      <v-parallax :src="require('@/assets/IMG_0492.jpg')" height="400" />


      <v-container class="body-container transparent">
        <a id="food-menu" name="food-menu"/>
        <h1>Menu</h1>
        <v-divider />
        <food-menu />
      </v-container>

      <v-parallax :src="require('@/assets/IMG_0444.jpg')" height="400">
        <catering-form>
          <v-btn text :large="$vuetify.breakpoint.mdAndUp" :small="$vuetify.breakpoint.smAdnDown"  slot="activator">Catering</v-btn>
        </catering-form>
      </v-parallax>
      <!-- <v-parallax :src="require('@/assets/IMG_0438.jpg')" height="400" /> -->
      <!-- <v-parallax :src="require('@/assets/IMG_0580.jpg')" height="400" /> -->


    </v-main>
<!-- 
    <v-footer color="red">
      <v-container>


      </v-container>
    </v-footer> -->

  </v-app>
</template>

<script>

import foodMenu from './components/menu-2';
import cateringForm from './components/catering-form'
import locationsMixin from "@/mixins/locations.js"

export default {
  name: 'App',
  mixins : [locationsMixin],
  components: {
    foodMenu,
    cateringForm
  },
  computed : {

  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
.darken-card
{
  background-color:rgba(0,0,0,.8) !important;
}
.darken-img
{
  background-color:black;
  >.v-image__image
  {
    opacity:.8;
  }

  &.more >.v-image__image
  {
    opacity:.4;
  }
  &.more-2 >.v-image__image
  {
    opacity:.2;
  }
}
.darken
{
  
  x

  .v-parallax__image-container
  {
    opacity:.5;
  }

}
.darken-red
{
  
  background-color:#4A130C44;
  .v-parallax__image-container
  {
    opacity:.5;
  }
}
.prepend-icon
{
  margin-right:20px;
}

.action-bar > *
{
  margin:5px 0px;
}
.two-lines
{
  height:1.6em;
  font-size:.8em;
  font-style:italic;
}
.flex-grow
{
  flex-grow:1;
}
.flex-shrink
{
  flex-shrink:1;
}
.text-shadow
{
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
}
.text-glow
{
  display:flex;
  width:100%;
  background-color:rgba(0, 0, 0, 0.3);
  text-shadow: 1px 1px 3px rgba(255,255,255, 1);
}
a
{
  text-decoration: none !important;
}
.text-outline
{
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
}
.blur
{
  img
  {
    filter:blur(3px);
  }
}

.body-container
{
  // box-shadow:   px 0px 40px 50px rgba(255,255,255,.1);
  background-color:rgba(255,255,255,.1);
  padding:20px !important;

  &.transparent
  {
    background-color:transparent
  }
}
.inner-shadow
{
  box-shadow: inset 0px 25px 25px -13px rgba(0,0,0,0.75);
}
</style>
