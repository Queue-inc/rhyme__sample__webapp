<template>
<div>
  <!-- dialog -->
  <v-dialog
    v-model="buyDialog"
  >
    <v-card>
      <v-card-title>
        購入しますか？
      </v-card-title>
      <v-card-text>
        No. {{ selectedImageNo }} , cost: {{ price }}
      </v-card-text>
      <v-card-actions>
        <v-row class="px-8">
          <v-btn text @click="buyDialog = false">キャンセル</v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="buyPhoto" depressed color="primary">購入</v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- main contents -->
  <v-container fluid class="px-12">
    <h3>Generated Pictures</h3>
    <v-row>
      <v-col
        v-for="item in 40"
        :key="item"
        cols="4"
        sm="4"
        md="3"
        lg="2"
        xl="2"
      >
        <v-img
          :src="require(`@/assets/${item}.jpg`)"
        >
          <v-overlay v-if="!isPurchased(item)" absolute opacity="0.9">
            <v-btn text @click="clickPhoto(item)">
              <v-icon
                light
              >mdi-lock
              </v-icon>
              {{ price }}
            </v-btn>
          </v-overlay>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Picture',

  data() {
    return {
      price: 50,
      buyDialog: false,
      purchasedImages: [] as number[],
      selectedImageNo: 0,
    }
  },

  mounted() {
    const list = localStorage.getItem('purchasedImages');
    console.log(list)
    if (list !== null) {
      this.purchasedImages = JSON.parse(list);
    }
  },

  methods: {
    clickPhoto(num: number) {
      this.selectedImageNo = (num - 1);
      this.buyDialog = true;
    },
    buyPhoto() {
      this.purchasedImages.push(this.selectedImageNo)
      console.log(this.purchasedImages)

      // Todo: 課金処理

      localStorage.setItem('purchasedImages', JSON.stringify(this.purchasedImages));
      this.buyDialog = false;
    },
    isPurchased(num: number): boolean {
      console.log(this.purchasedImages.indexOf(num-1))
      return this.purchasedImages.indexOf(num-1) == -1 ? false : true;
    }
  }
})
</script>