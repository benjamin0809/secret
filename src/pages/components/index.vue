<template>
	<view class="content">
        <image class="logo" src="../../static/logo.png"></image>
		<view>
            <text class="title">{{title}}</text>
            <view class="image-item" v-for="(item) in list" :key="item.id">
                <view class="image-content">
                    <image style="width: 200px; height: 200px; background-color: #eeeeee;" :mode="item.mode" :src="item.fullpath"
                        @error="imageError"></image>
                </view>
                <view class="image-title">{{item.text}}</view>
            </view>
        </view>
	</view>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Hupu from '../../api/hupu'
	export default Vue.extend({
		data() {
			return {
				title: 'Hello, Im Component',
                list: []
			}
		},
		onLoad() {
            this.getImages()
		},
		methods: {
            async getImages() {
               (this.list as any) = await new Hupu().getMobileImages()
            }
            
		}
	});
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
