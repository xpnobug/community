<script setup lang="ts">
import {getCurrentInstance, ref} from "vue";
import {useRouter} from "vue-router";
import {getStatisticsById} from "@/api/statistics";
import {useDefer} from "@/hooks/useDefer.js";
import {menuItems} from "@/hooks/useMenu";
import NavUserInfoComponent from "@/components/navComponent/NavUserInfoComponent.vue";
import IconFont from "@/components/icon/IconFont.vue";
//定义变量
const menuPmView = ref();
const djValueSet = ref(true);
const instance = getCurrentInstance()
const router = useRouter();
const defer = useDefer();

instance?.proxy?.$Bus.on("djValue", (param) => {
  djValueSet.value = param;
})
//屏幕大小钮监听事件 true :pc false:mobile
instance?.proxy?.$Bus.on("pmView", (param) => {
  menuPmView.value = param;
})
//获取登录人信息
const userInfo = ref({});
const statistics = ref({});
instance?.proxy?.$Bus.on("userInfo", (param: any) => {
  if (param !== null){
    getStatisticsById(param.userId).then(res => {
      statistics.value = res.data.data;
    });
    userInfo.value = param;
  }else {
    console.error("用户信息获取失败")
  }
})

const djId = ref('0');
const handleMenuItemClick = (item: any) => {
  djId.value = item.id; // 使用菜单项的name属性作为路由名称
  router.push({path: item.url})
  // console.log(routeName, item.url)
};

</script>


<template>
  <div class="ra8xgQ ZbSf_A dr1mMg u0gqxQ">
    <aside v-if="djValueSet" class="Rz974w" id=":r0:0">
      <div class="TQmvYQ" style="top: 54px;height: calc(-54px + 100vh);">
        <div class="PDv0sA ZIDFlw" style="">
          <NavUserInfoComponent />
          <div class="DUNhWQ fF92sA _4FnCVg">
            <span class="myA6QQ" aria-hidden="true" style="--nX1vxg: 16px;"></span>
<!--            <nav>-->
<!--              <ul class="YxrMgA Bnz3pA EiK6Eg _9Mb__A" role="list">-->
<!--                <li class="k__oiw _9Mb__A">-->
<!--                  <a href="/" -->
<!--                     class="_1QoxDw DNpAZA o4TrkA CA2Rbg kdzRLw fgQwew zQlusQ uRvRjQ oGPTlw YPTJew Qkd66A tYI0Vw vCeYsQ"-->
<!--                  >-->
<!--                    -->
<!--									<span class="JyB_vw" style="&#45;&#45;8ZV4pQ: 8px; &#45;&#45;5kmWhA: center;">-->
<!--&lt;!&ndash;                    首页svg&ndash;&gt;-->
<!--										<span class="yYw_FA Zxv8Qg">-->
<!--											<span aria-hidden="true" class="NA_Img dkWypw">-->
<!--													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--														<path fill-rule="evenodd" clip-rule="evenodd" d="M9 13c0-1.657 1-3 3-3s3 1.343 3 3v3a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-3Zm4.5 0v3a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-3c0-.535.16-.895.353-1.105.175-.19.502-.395 1.147-.395s.972.205 1.147.395c.193.21.353.57.353 1.105Z"-->
<!--                                  fill="currentColor">-->
<!--														</path>-->
<!--														<path fill-rule="evenodd" clip-rule="evenodd" d="M3 12.245a5 5 0 0 1 1.678-3.737l4.665-4.146a4 4 0 0 1 5.315 0l4.664 4.146A5 5 0 0 1 21 12.245V17a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-4.755Zm16.5 0V17a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 17v-4.755A3.5 3.5 0 0 1 5.675 9.63l4.664-4.146a2.5 2.5 0 0 1 3.322 0l4.664 4.146a3.5 3.5 0 0 1 1.175 2.616Z"-->
<!--                                  fill="currentColor">-->
<!--														</path>-->
<!--													</svg>-->
<!--												</span>-->
<!--										</span>-->
<!--										<span class="yYw_FA">-->
<!--											<span>-->
<!--												<p class="fFOiLQ _5Ob_nQ CCfw7w GHIRjw">-->
<!--													首页-->
<!--												</p>-->
<!--											</span>-->
<!--										</span>-->
<!--									</span>-->
<!--                  </a>-->
<!--                </li>-->
<!--              </ul>-->
<!--            </nav>-->
            <span class="myA6QQ" aria-hidden="true" style="--nX1vxg: 8px;">
					</span>
          </div>
          <div class="KnHzhQ">
            <div class="epgNPA">
              <div class="KhPLRA _5aI0pg zdRd5w" role="region" style="--chgjPA: 40px; --Kb9rvA: 0px; --j49DWw: 250ms; --c1IzXw: 50ms;">
                <div class="T3uz5Q NvaaRg" aria-hidden="false">
                  <div class="DUNhWQ _4FnCVg">
                    <div class="SgyxGQ _1rtWjA">
                      <div class="ZoFOcA _1hUVhg v0NzYQ">
                        <div class="PEzRtA">
                          <div class="">
                            <div class="x6XCCg" style="--69qs7g: 8px;">
                              <div class="cCKKcQ">
                                <nav>
                                  <ul class="YxrMgA _25vNWQ EiK6Eg _9Mb__A" role="list" id=":r9m:" aria-labelledby=":r9n:">
<!--                                    导航列表-->
                                    <li class="k__oiw _9Mb__A" v-for="item in menuItems">
                                      <a @click="handleMenuItemClick(item)" href="#"
                                         class="_1QoxDw DNpAZA o4TrkA CA2Rbg fgQwew zQlusQ uRvRjQ oGPTlw YPTJew Qkd66A tYI0Vw vCeYsQ a_AtFA TZTGpw"
                                         :class="djId === item.id ? 'kdzRLw':''"
                                         aria-label="高级版功能">
																			<span class="JyB_vw" style="--8ZV4pQ: 8px; --5kmWhA: center;">
																				<span class="yYw_FA Zxv8Qg">
																					<div class="Da1_FQ">
																						<span aria-hidden="true" class="NA_Img dkWypw">
                                               <IconFont class="icon svg" :style="{ fontSize: '20px' }" :type="item.icon"/>
																						</span>
																					</div>
																				</span>
																				<span class="yYw_FA">
																					<div class="k3zO6A">
																						<div class="YTRpDQ" style="--4oFB4A: 8px; --_nyLbw: center;">
																							<span class="r7sYbA">
																								<span>
																									<p class="fFOiLQ _5Ob_nQ CCfw7w GHIRjw">
																										{{ item.label }}
																									</p>
																								</span>
																							</span>
<!--                                            功能图标  -->
<!--																							<span class="r7sYbA">-->
<!--																								<span class="Mv7ZNQ">-->
<!--																									<span class="ND60fA GFDO_A ShdDsQ _31xSpA UQIxBA">-->
<!--																										<span class="vkK5cw UQIxBA">-->
<!--																											<span class="ffz_lw vkK5cw UQIxBA ty_rNQ">-->
<!--																												<span aria-hidden="true" class="dMPxvw lo0jhA uRWxVA dkWypw">-->
<!--																													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">-->
<!--																														<path fill="currentColor" d="M7.51 4.87C7.01 6.27 6.45 6.95 5.94 7c-.57.07-1.07-.18-1.54-.8a.54.54 0 0 0-.1-.1 1 1 0 1 0-.8.4l.01.12.82 3.24A1.5 1.5 0 0 0 5.78 11h4.44a1.5 1.5 0 0 0 1.45-1.14l.82-3.24a.54.54 0 0 0 .01-.12 1 1 0 1 0-.8-.4.54.54 0 0 0-.1.09c-.49.62-1 .87-1.54.81-.5-.05-1.04-.74-1.57-2.13a1 1 0 1 0-.98 0zM11 11.75a.5.5 0 1 1 0 1H5a.5.5 0 1 1 0-1h6z">-->
<!--																														</path>-->
<!--																													</svg>-->
<!--																												</span>-->
<!--																											</span>-->
<!--																										</span>-->
<!--																									</span>-->
<!--																								</span>-->
<!--																							</span>-->
																						</div>
																					</div>
																				</span>
<!--																				<span class="yYw_FA Zxv8Qg">-->
<!--																					<span aria-hidden="true" class="NA_Img dkWypw lmfTqA">-->
<!--																						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"-->
<!--                                                 fill="none">-->
<!--																							<path fill="currentColor" d="m9.216 7.619 4.204 4.204a.25.25 0 0 1 0 .354l-4.204 4.204a.75.75 0 0 0 1.06 1.061l4.205-4.204a1.75 1.75 0 0 0 0-2.475l-4.204-4.205a.75.75 0 0 0-1.061 1.06">-->
<!--																							</path>-->
<!--																						</svg>-->
<!--																					</span>-->
<!--																				</span>-->
																			</span>
                                      </a>
                                    </li>

                                  </ul>
                                </nav>
                              </div>
                              <div class="cCKKcQ g9IOMA">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="YPwXew _1rtWjA XyOjeA DKR5aQ">
                        <div class="PXSXJA">
                          <div class="b2SWlQ KqIqDg wqfmHQ VwlkCw">
                          </div>
                          <div class="b2SWlQ KqIqDg wqfmHQ Rfn6xw">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="DUNhWQ _4FnCVg">

            <div class="cCKKcQ">
              <nav>
                <ul class="YxrMgA _25vNWQ EiK6Eg _9Mb__A" role="list" id=":r6g:" aria-labelledby=":r6h:">
                  <li class="k__oiw _9Mb__A">
                    <button class="_1QoxDw o4TrkA CA2Rbg fgQwew zQlusQ uRvRjQ oGPTlw YPTJew Qkd66A tYI0Vw vCeYsQ a_AtFA TZTGpw"
                            type="button">
										<span class="JyB_vw" style="--8ZV4pQ: 8px; --5kmWhA: center;">
<!--											<span class="yYw_FA Zxv8Qg">
												<div class="Da1_FQ">
													<span aria-hidden="true" class="NA_Img dkWypw">
														<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path fill-rule="evenodd" clip-rule="evenodd" d="M4 18.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h6.5c.275 0 .5.225.5.5v13.5H4Zm8.5 1.497V20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6.5c1.102 0 2 .895 2 2v3.997h2L20 9c1.105 0 2 .892 2 2v7l-1.5-.001V11c0-.278-.222-.5-.5-.5l-3.126-.001-4.374-.002v8l7.5.003a.5.5 0 0 0 .5-.5H22a2 2 0 0 1-2 2l-7.5-.003ZM5 7.497h4.5v-1.5H5v1.5Zm0 3h4.5v-1.5H5v1.5Zm4.5 3H5v-1.5h4.5v1.5Zm-4.5 3h4.5v-1.5H5v1.5Zm11-3h-2v-1.5h2v1.5Zm0 3h-2v-1.5h2v1.5Zm3-3h-2v-1.5h2v1.5Zm0 3h-2v-1.5h2v1.5Z"
                                    fill="currentColor">
															</path>
														</svg>
													</span>
												</div>
											</span>-->
											<span class="yYw_FA">
												<div class="k3zO6A">
													<div class="YTRpDQ" style="--4oFB4A: 8px; --_nyLbw: center;">
														<span class="r7sYbA">
															<span>
																<p class="fFOiLQ _5Ob_nQ CCfw7w GHIRjw">
																	©2020 - 2024 By Couei
																</p>
															</span>
														</span>
													</div>
												</div>
											</span>
										</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            <span class="myA6QQ" aria-hidden="true" style="--nX1vxg: 8px;">
					</span>
            <hr class="jj2gEQ">
            <span class="myA6QQ" aria-hidden="true" style="--nX1vxg: 8px;">
					</span>
            <div class="cCKKcQ">
              <nav>
                <ul class="YxrMgA _25vNWQ EiK6Eg _9Mb__A" role="list" id=":r6k:" aria-labelledby=":r6l:">
                  <li class="k__oiw _9Mb__A">
                    <a href="#" class="_1QoxDw DNpAZA o4TrkA CA2Rbg fgQwew zQlusQ uRvRjQ oGPTlw YPTJew Qkd66A tYI0Vw vCeYsQ a_AtFA TZTGpw"
                       draggable="false">
										<span class="JyB_vw" style="--8ZV4pQ: 8px; --5kmWhA: center;">
<!--
											<span class="yYw_FA Zxv8Qg">
												<div class="Da1_FQ">
													<span aria-hidden="true" class="NA_Img dkWypw">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
															<path fill="currentColor" d="M8 5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3h4.25a.75.75 0 1 1 0 1.5H19V18a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6.5H3.75a.75.75 0 0 1 0-1.5H8zM6.5 6.5V18c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5V6.5h-11zm3-1.5h5c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5zm-.25 4h1.5v8h-1.5V9zm4 0h1.5v8h-1.5V9z">
															</path>
														</svg>
													</span>
												</div>
											</span>
-->
											<span class="yYw_FA">
												<div class="k3zO6A">
													<div class="YTRpDQ" style="--4oFB4A: 8px; --_nyLbw: center;">
														<span class="r7sYbA">
															<span>
																<p class="fFOiLQ _5Ob_nQ CCfw7w GHIRjw">
																	京ICP备2023019859号-1
																</p>
															</span>
														</span>
													</div>
												</div>
											</span>
										</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <span class="myA6QQ" aria-hidden="true" style="--nX1vxg: 16px;">
					</span>
          </div>
        </div>
      </div>
    </aside>
    <main class="_sOBqQ">
      <div class="_DTURQ">
        <RouterView/>
      </div>
    </main>
  </div>

</template>

<style scoped>
@media screen and (max-width: 768px)  {
  .Rz974w{
    display: none;
  }
}

:root{
  /* CSS 变量初始化 */
  --69qs7g: 0;
  --3kYYrw: stretch;
  --vRM1SA: transparent;
  --GoqvEg: transparent;
  --_eU_MA: 0px;
  ---JoBUw: transparent;
  --msNBcg: flex-start;
  --safe-area-inset-left: env(safe-area-inset-left);
}

.ra8xgQ {
  color: var(--VNXpSw);
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  grid-template-rows: 0fr 0fr 1fr 0fr;
  margin: 0 auto;
}

._sOBqQ {
  grid-row: 3 / 4;
  z-index: 1;
}
.AK72mA, ._sOBqQ {
  grid-column: 2 / 3;
  position: relative;
  width: 100%;
}
._DTURQ {
  height: 100%;
  overflow: auto;
  position: absolute;
  width: 100%;
}

.Rz974w {
  grid-column: 1 / 2;
  grid-row: 2 / 5;
  width: 260px;
  z-index: 1;
}

.TQmvYQ {
  position: sticky;
  width: 245px;
}

.KnHzhQ, .PDv0sA {
  display: flex;
  flex-direction: column;
  position: relative;
}
.PDv0sA {
  box-sizing: border-box;
  height: 100%;
}

.DUNhWQ {
  box-sizing: border-box;
  position: relative;
}

.DUNhWQ.fF92sA {
  padding-top: 24px;
}

.DUNhWQ._4FnCVg {
  padding-left: 16px;
}

.DUNhWQ {
  margin-left: var(--safe-area-inset-left);
}

.KnHzhQ {
  display: flex;
  flex-direction: column;
  position: relative;
}

.KnHzhQ {
  flex-grow: 1;
  overflow: hidden auto;
}

.x6XCCg {
  --69qs7g: 0;
  --E7DSCw: var(--69qs7g);
  grid-row-gap: var(--E7DSCw);
  --3kYYrw: stretch;
  --ax91sw: var(--3kYYrw);
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  justify-items: var(--ax91sw);
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}

@media (min-width: 600px) {
  .x6XCCg {
    --TP9XwA: var(--69qs7g);
    --E7DSCw: var(--TP9XwA);
    --hN5L-Q: var(--3kYYrw);
    --ax91sw: var(--hN5L-Q);
  }
}

@media (min-width: 900px) {
  .x6XCCg {
    --R7FQLw: var(--TP9XwA);
    --E7DSCw: var(--R7FQLw);
    --7T866Q: var(--hN5L-Q);
    --ax91sw: var(--7T866Q);
  }
}

@media (min-width: 1200px) {
  .x6XCCg {
    --V-rxKA: var(--R7FQLw);
    --E7DSCw: var(--V-rxKA);
    --ky9GVA: var(--7T866Q);
    --ax91sw: var(--ky9GVA);
  }
}

.myA6QQ {
  display: block;
  flex-shrink: 0;
}

.myA6QQ {
  --nX1vxg: 0;
  --S75r8Q: var(--nX1vxg);
  height: var(--S75r8Q);
  width: var(--S75r8Q);
}

@media (min-width: 600px) {
  .myA6QQ {
    --dlbLOw: var(--nX1vxg);
    --S75r8Q: var(--dlbLOw);
  }
}

@media (min-width: 900px) {
  .myA6QQ {
    --iOBqTg: var(--dlbLOw);
    --S75r8Q: var(--iOBqTg);
  }
}

@media (min-width: 1200px) {
  .myA6QQ {
    --nsAmaA: var(--iOBqTg);
    --S75r8Q: var(--nsAmaA);
  }
}

.epgNPA {
  width: 100%;
}

.DUNhWQ > ._3FuBBw {
  margin-top: 16px;
}

.jj2gEQ {
  border: none;
  border-bottom: 1px solid var(--OuCkCQ);
  box-sizing: border-box;
  height: 1px;
  margin: 0;
}

.Tz6Wwg {
  position: relative;
}

._9Mb__A {
  border: 0;
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;
}

.YxrMgA {
  display: grid;
}

.YxrMgA.Bnz3pA {
  grid-gap: 4px;
}

.KhPLRA {
  display: grid;
  grid-template-areas: "content";
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  position: relative;
}

.sdMd3w {
  box-sizing: border-box;
  height: unset;
  padding: 8px 12px;
  width: 100%;
}

.NvaaRg {
  overflow: hidden;
}

.T3uz5Q {
  grid-area: content;
}

.YxrMgA._25vNWQ {
  grid-gap: 8px;
}

.DqzY_g {
  box-sizing: border-box;
  isolation: isolate;
  width: 100%;
}

.mtKaSg {
  background-color: var(--Shm3YQ);
  border-radius: 8px;
  padding: 16px;
  position: relative;
}

.tYI0Vw {
  word-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smooth: always;
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  text-size-adjust: none;
  font-family: Canva Sans, Noto Sans Variable, Noto Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
  font-variation-settings: "opsz" 0;
  font-weight: 400;
  margin: 0;
  overflow-wrap: break-word;
}

.tYI0Vw {
  font-size: calc(var(1rem, .1rem) * 14);
  line-height: calc(var(1rem, .1rem) * 22);
}

.tYI0Vw {
  font-weight: 600;
}

.CA2Rbg {
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font: inherit;
  height: 100%;
  margin: 0;
  padding: 0;
  text-transform: inherit;
  -webkit-user-select: none;
  user-select: none;
  width: 100%;
}

.Qkd66A {
  --vRM1SA: transparent;
  --GoqvEg: transparent;
  --mjBh2A: var(--vRM1SA);
  --D3X_-g: var(--vRM1SA);
  --l6Y1Zg: var(--vRM1SA);
  --1Scd5Q: var(--GoqvEg);
  --KSrVXA: var(--D3X_-g);
  --cFdXew: var(--GoqvEg);
  --HlSkDQ: var(--mjBh2A);
  --GxPE8Q: var(--KSrVXA);
  --_LQA6w: var(--l6Y1Zg);
  --2UdU2w: var(--1Scd5Q);
  --_eU_MA: 0px;
  ---JoBUw: transparent;
  --2G1rlQ: var(---JoBUw);
  --jH0mCg: var(---JoBUw);
  --WbaFJQ: var(--2G1rlQ);
  align-items: center;
  background-color: var(--vRM1SA);
  border: var(--_eU_MA) solid var(---JoBUw);
  border-radius: 8px;
  box-sizing: border-box;
  color: var(--GoqvEg);
  cursor: pointer;
  display: inline-flex;
  height: 40px;
  max-width: 100%;
  min-width: 80px;
  vertical-align: middle;
}

.YPTJew {
  --vRM1SA: var(--ob8tTA);
  --GoqvEg: var(--QeQ0Dw);
  --mjBh2A: var(--MghLXQ);
  --D3X_-g: var(--3R4u8w);
  --l6Y1Zg: var(--TwiLcg);
  --1Scd5Q: var(--TZOI7A);
  --KSrVXA: var(--SZMkXA);
  --cFdXew: var(--8Ex5gA);
  --HlSkDQ: var(--1zesEA);
  --GxPE8Q: var(--AMxRgw);
  --_LQA6w: var(--BZ60Jw);
  --2UdU2w: var(--spIP2A);
}

.o4TrkA {
  outline: none;
}

.fgQwew {
  justify-content: start;
}

.DNpAZA {
  text-align: center;
}

.DNpAZA {
  box-sizing: border-box;
  text-decoration: none;
}

.oGPTlw {
  border: 0;
  border-radius: 0;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  height: auto;
  min-height: 40px;
  padding: 8px 16px;
  text-align: start;
}

.Qkd66A.kdzRLw {
  background-color: var(--KSrVXA);
  border-color: var(--jH0mCg);
  color: var(--cFdXew);
}

.uRvRjQ.Qkd66A {
  transition: background-color .1s linear, border-color .1s linear, color .1s linear;
}

.EiK6Eg .oGPTlw {
  border-radius: 8px;
}

.oGPTlw.vCeYsQ {
  outline: none;
}

.Qkd66A.zQlusQ:hover {
  background-color: var(--mjBh2A);
}

.Qkd66A.kdzRLw.zQlusQ:hover {
  background-color: var(--HlSkDQ);
}

.mh2TGQ {
  position: relative;
}

._6mbnHA._6mbnHA {
  display: flex;
  isolation: isolate;
  overflow: hidden;
}

.DqzY_g ._6mbnHA {
  height: auto;
  width: auto;
}

.DqzY_g.wKiiLw ._6mbnHA {
  transition: background-color .15s ease-in-out;
}

button {
  -webkit-tap-highlight-color: transparent;
}

.cclg9A {
  min-width: unset;
}

.cwOZMg {
  justify-content: center;
}

.aYjaiA {
  float: right;
  width: auto;
}

._5Ob_nQ {
  text-align: start;
}

.fM_HdA {
  color: var(--VNXpSw);
}

._2xcaIA:not(:last-child) {
  margin-bottom: 8px;
}

.fFOiLQ {
  word-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smooth: always;
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  text-size-adjust: none;
  font-family: Canva Sans, Noto Sans Variable, Noto Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
  font-variation-settings: "opsz" 0;
  font-weight: 400;
  margin: 0;
  overflow-wrap: break-word;
}

.fFOiLQ {
  font-size: calc(var(.1rem, .1rem) * 14);
  line-height: calc(var(.1rem, .1rem) * 22);
}

.TsUruQ {
  margin-top: 16px;
}

.JyB_vw {
  display: flex;
  flex-direction: row;
}

.JyB_vw {
  --msNBcg: flex-start;
  --NHvgCg: var(--msNBcg);
  --5kmWhA: flex-start;
  --VzEstg: var(--5kmWhA);
  --8ZV4pQ: 0;
  --pEaZCQ: var(--8ZV4pQ);
  align-items: var(--VzEstg);
  justify-content: var(--NHvgCg);
  margin-left: calc(var(--pEaZCQ) * -1);
}

@media (min-width: 600px) {
  .JyB_vw {
    --5fyqfQ: var(--msNBcg);
    --NHvgCg: var(--5fyqfQ);
    --W4Py2A: var(--5kmWhA);
    --VzEstg: var(--W4Py2A);
    --kIWE4w: var(--8ZV4pQ);
    --pEaZCQ: var(--kIWE4w);
  }
}

@media (min-width: 900px) {
  .JyB_vw {
    --p-96Ng: var(--5fyqfQ);
    --NHvgCg: var(--p-96Ng);
    --KCdKVw: var(--W4Py2A);
    --VzEstg: var(--KCdKVw);
    --oSM_2A: var(--kIWE4w);
    --pEaZCQ: var(--oSM_2A);
  }
}

@media (min-width: 1200px) {
  .JyB_vw {
    --CK0rhg: var(--p-96Ng);
    --NHvgCg: var(--CK0rhg);
    --c2T4Mg: var(--KCdKVw);
    --VzEstg: var(--c2T4Mg);
    --A3RCXA: var(--oSM_2A);
    --pEaZCQ: var(--A3RCXA);
  }
}

.SgyxGQ {
  display: flex;
  position: relative;
}

.SgyxGQ._1rtWjA {
  flex-direction: column;
  height: 100%;
  min-height: 0;
}

.GCOogQ {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.DqzY_g .GCOogQ {
  align-items: center;
  flex-direction: row;
}

.TcNIhA {
  align-items: center;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
}

.uRvRjQ > .TcNIhA:not(._1oCVHg) {
  transition: opacity .15s ease-in-out;
}

.dkWypw {
  align-items: center;
  box-sizing: border-box;
  display: inline-flex;
}

.uRWxVA {
  height: 16px;
  width: 16px;
}

.vWQmDQ {
  color: #fdbc68;
}

._5EWoLg {
  color: #fbbe28;
  margin-right: 4px;
  min-width: 16px;
}

.dkWypw:before {
  content: "\00200B";
  line-height: 1;
  width: 0;
}

.yYw_FA {
  box-sizing: border-box;
  flex: 1 1;
  min-width: 0;
}

.Zxv8Qg {
  flex: 0 0 auto;
}

.JyB_vw > .yYw_FA {
  padding-left: var(--pEaZCQ);
}

.ZoFOcA {
  overflow: hidden;
  position: relative;
  scrollbar-color: var(--WRSB_g) transparent;
  scrollbar-width: thin;
  z-index: 0;
}

._1hUVhg {
  height: 100%;
  overflow-y: auto;
}

.ZoFOcA.v0NzYQ:-webkit-scrollbar {
  background-color: unset;
  height: 8px;
  width: 8px;
}

.ZoFOcA:-webkit-scrollbar-thumb {
  background-color: var(--WRSB_g);
  border-radius: 9999px;
  visibility: hidden;
}

.ZoFOcA:-webkit-scrollbar-track {
  border-radius: 9999px;
}

.ZoFOcA:hover:-webkit-scrollbar-thumb {
  visibility: visible;
}

.YPwXew {
  bottom: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}

.DKR5aQ._1rtWjA {
  right: 15px;
}

.DKR5aQ._1rtWjA.XyOjeA {
  right: 8px;
}

.DqzY_g .ooEQMQ {
  align-items: center;
  align-self: start;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.myA6QQ._HvVQA {
  display: inline-block;
  height: auto;
  min-height: 1px;
}

.dkWypw > svg {
  display: block;
  height: 100%;
  width: 100%;
}

.Da1_FQ {
  align-items: center;
  display: flex;
  height: 24px;
  justify-content: center;
  line-height: 0;
  position: relative;
  width: 24px;
}

.PEzRtA {
  height: 100%;
  width: 100%;
}

.PXSXJA {
  bottom: 0;
  left: 0;
  overflow: hidden;
  right: 0;
  top: 0;
}

.PXSXJA {
  position: absolute;
}

.ro9yvw {
  flex: none;
  font-size: calc(var(--QDqQig) * .5);
  font-weight: 500;
  height: var(--QDqQig);
  line-height: calc(var(--QDqQig) - 4px);
  width: var(--QDqQig);
}

.Ud7ThQ {
  font-size: var(--QDqQig);
}

._8M3E3w {
  background: transparent 50%/cover no-repeat;
  background-clip: content-box;
  background-color: var(--HaLJsg);
  border-radius: 9999px;
  box-sizing: border-box;
  display: block;
  font-family: Canva Sans, Noto Sans Variable, Noto Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
  overflow: hidden;
}

.honG0A {
  box-shadow: inset 0 0 0 1px var(--OuCkCQ);
}

.GHIRjw {
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.NT2yCg {
  --vRM1SA: var(--EgWgfg);
  --GoqvEg: var(--REcY5g);
  --mjBh2A: var(--X3--Zg);
  --D3X_-g: var(--xfy86Q);
  --l6Y1Zg: var(--p53f_Q);
  --1Scd5Q: var(--XajtPQ);
  --KSrVXA: var(--FVk7Ew);
  --cFdXew: var(--_RN1Dg);
  --HlSkDQ: var(--2-zmYA);
  --GxPE8Q: var(--ySYdsQ);
  --_LQA6w: var(--aMXh3A);
  --2UdU2w: var(--8fGzbw);
  --_eU_MA: 1px;
  ---JoBUw: var(--620Maw);
  --jH0mCg: var(--TBPmDQ);
  --WbaFJQ: var(--UzSy6g);
}

.lsXp_w {
  height: 40px;
  padding: 0 calc(16px - var(--_eU_MA));
}

.fpu8CQ {
  height: auto;
  padding-bottom: 8px;
  padding-top: 8px;
  width: 100%;
}

.NA_Img {
  height: 24px;
  width: 24px;
}

.CCfw7w {
  color: inherit;
}

.KqIqDg {
  --Pb1Qvw: 0 0 20px 20px var(--4RaSjg);
  --GOd5gA: var(--xbFLow);
}

.b2SWlQ {
  position: absolute;
}

.b2SWlQ {
  box-shadow: var(--Pb1Qvw);
  opacity: 0;
}

.VwlkCw {
  top: -16px;
}

.VwlkCw {
  height: 16px;
  left: 0;
  right: 0;
}

.b2SWlQ.wqfmHQ {
  transition: opacity .25s, box-shadow .1s linear;
}

.Rfn6xw {
  height: 16px;
  left: 0;
  right: 0;
}

.Rfn6xw {
  bottom: -16px;
}

.k3zO6A {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

._5RSqIg {
  word-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smooth: always;
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  text-size-adjust: none;
  font-family: Canva Sans, Noto Sans Variable, Noto Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
  font-variation-settings: "opsz" 0;
  font-weight: 400;
  margin: 0;
  overflow-wrap: break-word;
}

._5RSqIg {
  font-size: calc(var(--wQwVGw, .1rem) * 12);
  line-height: calc(var(--wQwVGw, .1rem) * 20);
}

._bsk3w {
  color: var(--JEAqPw);
}

.i3zvHA {
  display: block;
}

.Qkd66A > ._38oWvQ {
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cwOZMg > ._38oWvQ {
  margin: auto;
}

.uRvRjQ > ._38oWvQ {
  transition: opacity .15s ease-in-out;
}

.YTRpDQ {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  pointer-events: none;
}

.YTRpDQ {
  --cgyfzQ: start;
  --IdRB7g: var(--cgyfzQ);
  --_nyLbw: flex-start;
  --gREU_A: var(--_nyLbw);
  --4oFB4A: 0;
  --aGX6Gw: var(--4oFB4A);
  align-items: var(--gREU_A);
  justify-content: var(--IdRB7g);
  margin-left: calc(var(--aGX6Gw) * -1);
  margin-top: calc(var(--aGX6Gw) * -1);
}

@media (min-width: 600px) {
  .YTRpDQ {
    --tIlGkw: var(--cgyfzQ);
    --IdRB7g: var(--tIlGkw);
    --AL11aA: var(--_nyLbw);
    --gREU_A: var(--AL11aA);
    --Mym05Q: var(--4oFB4A);
    --aGX6Gw: var(--Mym05Q);
  }
}

@media (min-width: 900px) {
  .YTRpDQ {
    --IOB5jg: var(--tIlGkw);
    --IdRB7g: var(--IOB5jg);
    --GuzVEQ: var(--AL11aA);
    --gREU_A: var(--GuzVEQ);
    --cHht5Q: var(--Mym05Q);
    --aGX6Gw: var(--cHht5Q);
  }
}

@media (min-width: 1200px) {
  .YTRpDQ {
    --eWCTBQ: var(--IOB5jg);
    --IdRB7g: var(--eWCTBQ);
    --wCXpqw: var(--GuzVEQ);
    --gREU_A: var(--wCXpqw);
    --hqPU3w: var(--cHht5Q);
    --aGX6Gw: var(--hqPU3w);
  }
}

.yAVqVg {
  margin-left: 4px;
  margin-right: 4px;
}

.NhroPg {
  display: flex;
  margin-right: 8px;
  white-space: normal;
}

.g9IOMA {
  display: none;
}

.cCKKcQ + .cCKKcQ {
  margin-top: -4px;
}

.r7sYbA {
  min-width: 0;
  pointer-events: auto;
}

.YTRpDQ > .r7sYbA {
  margin-left: var(--aGX6Gw);
  margin-top: var(--aGX6Gw);
}

.h_D62A {
  display: flex;
  flex-direction: column;
}

.R3BUpw {
  height: 12px;
  width: 12px;
}

.RMcv3A {
  color: var(--VNXpSw);
}

.RAIBAQ {
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(to bottom right, #03a5ab, #8b3dff);
}

.Mv7ZNQ {
  height: 24px;
  position: relative;
  width: 24px;
}

.UQIxBA {
  align-items: center;
  display: flex;
  justify-content: center;
}

._31xSpA {
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}

._31xSpA {
  position: relative;
}

.vkK5cw {
  position: relative;
}

.ffz_lw {
  border-radius: 100%;
  transition: background-color .3s ease-out;
}

._31xSpA.ND60fA .ffz_lw, ._31xSpA.ND60fA.ShdDsQ .ffz_lw {
  background-color: transparent;
}

.lo0jhA {
  height: 16px;
  width: 16px;
}

.dMPxvw.lo0jhA {
  border: 1px solid transparent;
  padding: 0;
}

.ND60fA.ShdDsQ .dMPxvw {
  color: var(--JEAqPw);
}

.ND60fA.GFDO_A .dMPxvw {
  color: #fdbc68;
}

</style>