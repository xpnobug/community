<template>
  <a-drawer
      title=""
      :placement="placement"
      :closable="false"
      :open="open"
      @close="onClose"
      width="300px"
      :style="{ backgroundColor: 'transparent'}"
  >
    <div class="TSBL8g" style="position: relative; z-index: 10;">
      <div class="zk9iKQ" style="width: 519.333px; height: 939.333px; top: 0px; left: 0px;">
        <div class="OoXsOQ AEurtw Vef6sw C_oBTg theme light _1EwbGQ LGK0Aw snipcss-foBEw"
             :style="{ transform: `translateX(${translateX}px)` }">
          <div class="c1Jd6Q b83w5A" tabindex="-1" style="max-width: 100%;">
            <div class="z7MXsQ theme light">
              <div class="w1HfGA">
                <div class="XW7eeg WCNLTQ">
                  <div data-focus-guard="true" tabindex="0">
                  </div>
                  <div class="epgNPA">
                    <div class="KhPLRA _5aI0pg zdRd5w" role="region" style="--chgjPA: 40px; --Kb9rvA: 0px; --j49DWw: 250ms; --c1IzXw: 50ms;">
                      <div class="T3uz5Q NvaaRg" aria-hidden="false">
                        <div class="_99hGSA">
                          <div class="ljXbCg">
                            <h4 class="lnCPoA _5Ob_nQ fM_HdA">
                              菜单
                            </h4>
                            <div class="jahd_w">
                              <div class="pMqKig">
                                <div class="WSUBQw">
                                  <div class="uLt0uw">
                                    <button class="_1QoxDw Qkd66A tYI0Vw o4TrkA cclg9A YPTJew Qkd66A tYI0Vw lsXp_w cwOZMg uRvRjQ _3AH3gw"
                                            type="button" aria-label="0条未读通知" aria-expanded="false">
																	<span class="TcNIhA">
																		<div class="KiK9Aw">
																			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
																				<path class="evJ6XQ" fill="currentColor" d="M13.5 19H15a3 3 0 0 1-6 0h1.5a1.5 1.5 0 0 0 3 0z">
																				</path>
																				<path class="x9EzJQ" fill="currentColor" fill-rule="evenodd" d="M20.04 17.5h.21a.75.75 0 1 1 0 1.5H3.75a.75.75 0 1 1 0-1.5h.21c1-1.15 1.82-2.7 1.82-5.97v-1.3a6.22 6.22 0 0 1 4.87-6.08 1.5 1.5 0 1 1 2.7 0 6.22 6.22 0 0 1 4.87 6.07v1.3c0 3.27.83 4.82 1.82 5.98zm-1.87 0c-.99-1.52-1.45-3.3-1.45-5.97v-1.3a4.72 4.72 0 0 0-9.44 0v1.3c0 2.67-.46 4.45-1.45 5.97h12.34z">
																				</path>
																			</svg>
																		</div>
																	</span>
                                    </button>
                                  </div>
                                  <div class="_1RdMWQ _e9ksA CWAxhQ">
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr class="jj2gEQ">
                  <div class="_6DGNeQ">
                    <div class="epgNPA">
                      <div class="KhPLRA _5aI0pg zdRd5w" role="region" style="--chgjPA: 40px; --Kb9rvA: 0px; --j49DWw: 250ms; --c1IzXw: 50ms;">
                        <div class="T3uz5Q NvaaRg" aria-hidden="false">
                          <div class="">
                            <div class="x6XCCg" style="--69qs7g: 8px;">
                              <div class="cCKKcQ">
                                <NavUserInfoComponent/>
                              </div>
                              <div class="cCKKcQ">
                                <nav>
                                  <ul class="YxrMgA _25vNWQ _9Mb__A" role="list" id=":r4lg:" aria-labelledby=":r4lh:">
                                    <li class="k__oiw _9Mb__A" v-for="item in menuItems">
                                      <a @click="handleMenuItemClick(item)" href="#" class="_1QoxDw DNpAZA o4TrkA CA2Rbg fgQwew zQlusQ uRvRjQ oGPTlw YPTJew Qkd66A tYI0Vw vCeYsQ a_AtFA TZTGpw"
                                         aria-label="高级版功能">
																			<span class="JyB_vw" style="--8ZV4pQ: 8px; --5kmWhA: center;">
																				<span class="yYw_FA Zxv8Qg">
																					<div class="Da1_FQ">
																						<span aria-hidden="true" class="NA_Img dkWypw">
                                               <i :class="item.icon"></i>
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
<!--																							<span class="r7sYbA">
																								<span class="Mv7ZNQ">
																									<span class="ND60fA GFDO_A ShdDsQ _31xSpA UQIxBA">
																										<span class="vkK5cw UQIxBA">
																											<span class="ffz_lw vkK5cw UQIxBA ty_rNQ">
																												<span aria-hidden="true" class="dMPxvw lo0jhA uRWxVA dkWypw">
																													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
																														<path fill="currentColor" d="M7.51 4.87C7.01 6.27 6.45 6.95 5.94 7c-.57.07-1.07-.18-1.54-.8a.54.54 0 0 0-.1-.1 1 1 0 1 0-.8.4l.01.12.82 3.24A1.5 1.5 0 0 0 5.78 11h4.44a1.5 1.5 0 0 0 1.45-1.14l.82-3.24a.54.54 0 0 0 .01-.12 1 1 0 1 0-.8-.4.54.54 0 0 0-.1.09c-.49.62-1 .87-1.54.81-.5-.05-1.04-.74-1.57-2.13a1 1 0 1 0-.98 0zM11 11.75a.5.5 0 1 1 0 1H5a.5.5 0 1 1 0-1h6z">
																														</path>
																													</svg>
																												</span>
																											</span>
																										</span>
																									</span>
																								</span>
																							</span>-->
																						</div>
																					</div>
																				</span>
<!--																				<span class="yYw_FA Zxv8Qg">
																					<span aria-hidden="true" class="NA_Img dkWypw lmfTqA">
																						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                 fill="none">
																							<path fill="currentColor" d="m9.216 7.619 4.204 4.204a.25.25 0 0 1 0 .354l-4.204 4.204a.75.75 0 0 0 1.06 1.061l4.205-4.204a1.75 1.75 0 0 0 0-2.475l-4.204-4.205a.75.75 0 0 0-1.061 1.06">
																							</path>
																						</svg>
																					</span>
																				</span>-->
																			</span>
                                      </a>
                                    </li>
                                    <li class="k__oiw _9Mb__A">
                                      <a href="#" class="_1QoxDw DNpAZA o4TrkA CA2Rbg fgQwew uRvRjQ oGPTlw YPTJew Qkd66A tYI0Vw vCeYsQ a_AtFA TZTGpw">
																		<span class="JyB_vw" style="--8ZV4pQ: 8px; --5kmWhA: center;">
																			<span class="yYw_FA Zxv8Qg">
																				<div class="Da1_FQ">
																					<span aria-hidden="true" class="NA_Img dkWypw RMcv3A">
																						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																							<path d="M9.6 5.613C7.91 5.466 6.98 4.874 6.484 3.7c-.179-.423-.304-.917-.384-1.5 0-.1-.1-.2-.2-.2s-.2.1-.2.2c-.08.583-.205 1.077-.384 1.5C4.821 4.874 3.891 5.466 2.2 5.613c-.1 0-.2.1-.2.2s.1.2.2.2c2.1.4 3.2 1.187 3.5 3.387 0 .1.1.2.2.2s.2-.1.2-.2c.3-2.2 1.4-2.987 3.5-3.387.1 0 .2-.1.2-.2s-.1-.2-.2-.2Z"
                                                    fill="url(#_1924317027__a)">
																							</path>
																							<path d="M19.469 11.865c-4-.8-5.726-2.73-6.526-6.629a.493.493 0 0 0-.474-.371.493.493 0 0 0-.475.376c-.009.006.007-.015 0 0-.8 4-2.625 5.824-6.525 6.624a.5.5 0 0 0 0 1c4 .8 5.717 2.687 6.517 6.587a.493.493 0 0 0 .483.413.493.493 0 0 0 .477-.387c-.005.01.006-.008 0 0 .8-4 2.623-5.813 6.523-6.613a.5.5 0 0 0 0-1Z"
                                                    fill="url(#_1924317027__b)">
																							</path>
																							<path d="M21.465 5.8c0-.084-.061-.14-.144-.156l-.056-.013c-1.168-.305-1.876-1.024-2.073-2.108a.153.153 0 0 0-.153-.153v.004c-.084 0-.14.062-.156.144l-.013.056c-.305 1.168-1.024 1.876-2.108 2.073a.153.153 0 0 0-.153.153h.004c0 .084.062.14.145.156l.055.013c1.168.305 1.876 1.024 2.073 2.108 0 .084.069.153.153.153v-.004c.084 0 .14-.062.156-.145l.014-.055c.304-1.168 1.023-1.876 2.107-2.073a.15.15 0 0 0 .15-.153Z"
                                                    fill="url(#_1924317027__c)">
																							</path>
																							<path d="M7.919 18.715c-1-.3-1.582-.782-1.782-1.782a.218.218 0 1 0-.436 0c-.3 1-.782 1.582-1.782 1.782a.218.218 0 0 0 0 .436c1 .3 1.582.782 1.782 1.782a.218.218 0 0 0 .436 0c.3-1 .782-1.582 1.782-1.782a.218.218 0 0 0 0-.436Z"
                                                    fill="url(#_1924317027__d)">
																							</path>
																							<defs>
																								<linearGradient id="_1924317027__a" x1="-7.733" y1="11.576" x2="11.416"
                                                                y2="31.039" gradientUnits="userSpaceOnUse">
																									<stop stop-color="#03A5AB">
																									</stop>
																									<stop offset="1" stop-color="#8B3DFF">
																									</stop>
																								</linearGradient>
																								<linearGradient id="_1924317027__b" x1="-7.733" y1="11.576" x2="11.416"
                                                                y2="31.039" gradientUnits="userSpaceOnUse">
																									<stop stop-color="#03A5AB">
																									</stop>
																									<stop offset="1" stop-color="#8B3DFF">
																									</stop>
																								</linearGradient>
																								<linearGradient id="_1924317027__c" x1="-7.733" y1="11.576" x2="11.416"
                                                                y2="31.039" gradientUnits="userSpaceOnUse">
																									<stop stop-color="#03A5AB">
																									</stop>
																									<stop offset="1" stop-color="#8B3DFF">
																									</stop>
																								</linearGradient>
																								<linearGradient id="_1924317027__d" x1="-7.733" y1="11.576" x2="11.416"
                                                                y2="31.039" gradientUnits="userSpaceOnUse">
																									<stop stop-color="#03A5AB">
																									</stop>
																									<stop offset="1" stop-color="#8B3DFF">
																									</stop>
																								</linearGradient>
																							</defs>
																						</svg>
																					</span>
																				</div>
																			</span>
																			<span class="yYw_FA">
																				<div class="k3zO6A">
																					<div class="YTRpDQ" style="--4oFB4A: 8px; --_nyLbw: center;">
																						<span class="r7sYbA">
																							<div class="RAIBAQ">
																								<span>
																									<p class="tYI0Vw _5Ob_nQ CCfw7w GHIRjw">
																										HELLO WORLD
																									</p>
																								</span>
																							</div>
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
                              <div class="cCKKcQ g9IOMA">
                              </div>
                              <hr class="jj2gEQ">
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-focus-guard="true" tabindex="0">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a-drawer>
</template>
<script lang="ts" setup>
import {getCurrentInstance, ref} from 'vue';
import type { DrawerProps } from 'ant-design-vue';
import NavUserInfoComponent from "@/components/navComponent/NavUserInfoComponent.vue";
import {useRouter} from "vue-router";
import {useDefer} from "@/hooks/useDefer.js";
const placement = ref<DrawerProps['placement']>('left');
import {menuItems} from "@/hooks/useMenu";
//定义变量

const open = ref<boolean>(false);
const instance = getCurrentInstance()
const router = useRouter();
const defer = useDefer();

instance?.proxy?.$Bus.on("djValue", (param) => {
  open.value = param;
})
const onClose = () => {
  open.value = false;
};


const djId = ref('0');
const handleMenuItemClick = (item: any) => {
  djId.value = item.id; // 使用菜单项的name属性作为路由名称
  router.push({path: item.url})
  onClose();
};

const translateX = ref(0);
function updateTranslateX() {
  // 计算 translateX 的值，这里假设窗口宽度的一半作为 translateX 的值
  translateX.value = window.innerWidth -85;
  if (window.innerWidth > 600) {
    translateX.value = window.innerWidth - 300;
  }
}

onMounted(() => {
  // 页面加载时初始化 translateX
  updateTranslateX();

  // 添加 resize 事件监听
  window.addEventListener('resize', updateTranslateX);
});

onUnmounted(() => {
  // 组件卸载时移除 resize 事件监听
  window.removeEventListener('resize', updateTranslateX);
});
</script>

<style scoped>
.zk9iKQ {
  height: 100%;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
}

.theme {
  color-scheme: var(--4h-m_A);
}



.light {
  --hRTv1g: 0px 0px 0px 1px rgba(64,87,109,.04),0px 6px 20px -4px rgba(64,87,109,.3);
}

.light {
  --5NEHmA: var(--hRTv1g);
}

.light {
  --HaLJsg: #ebecf0;
}

.light {
  --TQZnpw: var(--KtXlRg);
  --_fYF2A: var(--QADODw);
  --NP-zQw: var(--Shm3YQ);
  --Rv5mPw: var(--z7Xq7A);
}

.light {
  --gR6nQQ: linear-gradient(to bottom,var(--r6MHXQ),var(--C-q6Ig)),linear-gradient(to left,#ebe0fc 45%,#ddeaf9);
}

.AEurtw {
  pointer-events: auto;
}

.AEurtw {
  position: absolute;
}

.Vef6sw {
  background-color: var(--4RaSjg);
  box-sizing: border-box;
  color: var(--VNXpSw);
  display: flex;
  flex-grow: 1;
  height: 100%;
  overflow: hidden;
}

.LGK0Aw {
  overflow: visible;
}

._1EwbGQ {
  transition: transform .25s cubic-bezier(0,0,.2,1);
}

.OoXsOQ {
  bottom: 0;
  top: 0;
  width: 100%;
}

.OoXsOQ {
  left: -100%;
}

.Vef6sw:before {
  background-color: inherit;
  content: " ";
  height: 100vh;
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
}

.b83w5A {
  background-color: inherit;
  border-radius: 16px;
  display: flex;
  outline: none;
  transition: opacity .15s ease-in-out;
}

.b83w5A {
  position: absolute;
}

.c1Jd6Q {
  opacity: 1;
}

[tabindex] {
  -webkit-tap-highlight-color: transparent;
}

.OoXsOQ > .b83w5A {
  right: 0;
}

.OoXsOQ > .b83w5A {
  bottom: 0;
  flex-direction: row;
  height: 100%;
  top: 0;
}

.z7MXsQ {
  height: 100%;
  width: 100%;
}

.w1HfGA {
  box-sizing: border-box;
  height: 100%;
}

.w1HfGA {
  overflow: scroll;
  overscroll-behavior: contain;
  padding-bottom: var(--safe-area-inset-bottom);
  padding-top: max(var(--safe-area-inset-top),8px);
  scrollbar-width: none;
  width: 80vw;
}

@media (min-width: 600px){
  .w1HfGA {
    width: 280px;
  }
}

.w1HfGA:-webkit-scrollbar {
  height: 0;
  width: 0;
}

.XW7eeg {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: calc(100% + 1px);
}

[dir="ltr"] .XW7eeg.WCNLTQ  {
  margin-left: var(--safe-area-inset-left);
}

.epgNPA {
  width: 100%;
}

.jj2gEQ {
  border: none;
  border-bottom: 1px solid var(--OuCkCQ);
  box-sizing: border-box;
  height: 1px;
  margin: 0;
}

._6DGNeQ {
  box-sizing: border-box;
  display: flex;
}

._6DGNeQ {
  flex-direction: column;
  flex-grow: 1;
  overflow: scroll;
  padding-top: 8px;
}

.KhPLRA {
  display: grid;
  grid-template-areas: "content";
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  position: relative;
}

.NvaaRg {
  overflow: hidden;
}

.T3uz5Q {
  grid-area: content;
}

._99hGSA {
  align-items: center;
  flex-shrink: 0;
  height: 56px;
  padding-left: 16px;
  padding-right: 16px;
}

._99hGSA {
  box-sizing: border-box;
  display: flex;
}

.ljXbCg {
  flex-grow: 1;
}

.ljXbCg {
  align-items: center;
  display: flex;
}

.lnCPoA {
  font-variation-settings: "opsz" 0;
}

.lnCPoA {
  word-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smooth: always;
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  text-size-adjust: none;
  font-family: Canva Sans,Noto Sans Variable,Noto Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;
  font-weight: 700;
  margin: 0;
  overflow-wrap: break-word;
}

.lnCPoA {
  font-size: calc(var(.1rem, .1rem)*18);
  line-height: calc(var(.1rem, .1rem)*24);
}

._5Ob_nQ {
  text-align: start;
}

.fM_HdA {
  color: var(--VNXpSw);
}

.jahd_w {
  align-items: center;
  display: flex;
}

.jahd_w {
  margin-left: auto;
}

.x6XCCg {
  --69qs7g: 0;
  --E7DSCw: var(--69qs7g);
  grid-row-gap: var(--E7DSCw);
  --3kYYrw: stretch;
  --ax91sw: var(--3kYYrw);
  display: grid;
  grid-template-columns: minmax(0,1fr);
  justify-items: var(--ax91sw);
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}

@media (min-width: 600px){
  .x6XCCg {
    --TP9XwA: var(--69qs7g);
    --E7DSCw: var(--TP9XwA);
    --hN5L-Q: var(--3kYYrw);
    --ax91sw: var(--hN5L-Q);
  }
}

@media (min-width: 900px){
  .x6XCCg {
    --R7FQLw: var(--TP9XwA);
    --E7DSCw: var(--R7FQLw);
    --7T866Q: var(--hN5L-Q);
    --ax91sw: var(--7T866Q);
  }
}

.pMqKig {
  display: inline-flex;
}

.cCKKcQ + .cCKKcQ  {
  margin-top: -4px;
}

.g9IOMA {
  display: none;
}

.WSUBQw {
  display: inline-flex;
  position: relative;
}

.Pi_OtA {
  align-self: end;
  box-sizing: border-box;
  flex-shrink: 0;
  padding: 16px 16px 32px;
  width: 100%;
}

.CWAxhQ {
  word-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smooth: always;
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  text-size-adjust: none;
  font-family: Canva Sans,Noto Sans Variable,Noto Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;
  font-variation-settings: "opsz" 0;
  font-weight: 400;
  margin: 0;
  overflow-wrap: break-word;
}

.CWAxhQ {
  font-size: calc(var(.1rem, .1rem)*11);
  font-weight: 600;
  letter-spacing: calc(var(.1rem, .1rem)*.1);
  line-height: calc(var(.1rem, .1rem)*16);
}

._e9ksA {
  background: var(--jTT_jQ);
  border-radius: 8px;
  color: var(--eLjurg);
  pointer-events: none;
  position: absolute;
  transform: scale(1);
  transform-box: fill-box;
  transform-origin: center;
  transition: transform .35s cubic-bezier(.5,1.85,.6,.75) .5s;
  white-space: nowrap;
}

._1RdMWQ {
  height: 6px;
  right: 8px;
  top: 8px;
  transform: scale(0);
  transition: none;
  width: 6px;
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

.YxrMgA._25vNWQ {
  grid-gap: 8px;
}

.GBjf5Q + .GBjf5Q  {
  margin-top: 16px;
}

button {
  -webkit-tap-highlight-color: transparent;
}

.tYI0Vw {
  word-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smooth: always;
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  text-size-adjust: none;
  font-family: Canva Sans,Noto Sans Variable,Noto Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;
  font-variation-settings: "opsz" 0;
  font-weight: 400;
  margin: 0;
  overflow-wrap: break-word;
}

.tYI0Vw {
  font-size: calc(var(.1rem, .1rem)*14);
  line-height: calc(var(.1rem, .1rem)*22);
}

.tYI0Vw {
  font-weight: 600;
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

.cclg9A {
  min-width: unset;
}

.lsXp_w {
  height: 40px;
  padding: 0 calc(16px - var(--_eU_MA));
}

._3AH3gw {
  width: 40px;
}

.cwOZMg {
  justify-content: center;
}

.uRvRjQ.Qkd66A {
  transition: background-color .1s linear,border-color .1s linear,color .1s linear;
}

.EVWsgA {
  position: relative;
}

.k2fSTA.XLn_sw {
  box-sizing: border-box;
  margin-left: 0;
  margin-top: 0;
  width: 100%;
}

.H3ji0A.AC_Gyg {
  box-sizing: border-box;
  margin-left: 0;
  margin-top: 0;
  width: 100%;
}

.TcNIhA {
  align-items: center;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
}

.uRvRjQ > .TcNIhA:not(._1oCVHg)  {
  transition: opacity .15s ease-in-out;
}

.QnQnDA {
  outline: none;
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
  grid-auto-columns: minmax(0,1fr);
  height: auto;
  min-height: 40px;
  padding: 8px 16px;
  text-align: start;
}

.oGPTlw.vCeYsQ {
  outline: none;
}

.Qkd66A.kdzRLw {
  background-color: var(--KSrVXA);
  border-color: var(--jH0mCg);
  color: var(--cFdXew);
}

.mtKaSg {
  background-color: var(--Shm3YQ);
  border-radius: 8px;
  padding: 16px;
  position: relative;
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

.fpu8CQ {
  height: auto;
  padding-bottom: 8px;
  padding-top: 8px;
  width: 100%;
}

.KiK9Aw {
  box-sizing: border-box;
  display: inline-block;
  height: 24px;
  vertical-align: text-bottom;
  width: 24px;
}

.HySjhA {
  height: 32px;
  min-width: unset;
  padding: 0 calc(8px - var(--_eU_MA));
}

._8F9l5A {
  border: none;
  height: 56px;
  padding: 0;
  width: 100%;
}

._8F9l5A {
  display: block;
  position: relative;
}

.UdhiJA {
  box-sizing: border-box;
  display: flex;
  padding-left: 68px;
  padding-right: 16px;
  pointer-events: none;
  position: absolute;
  top: 32px;
  width: 100%;
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
  margin-left: calc(var(--pEaZCQ)*-1);
}

@media (min-width: 600px){
  .JyB_vw {
    --5fyqfQ: var(--msNBcg);
    --NHvgCg: var(--5fyqfQ);
    --W4Py2A: var(--5kmWhA);
    --VzEstg: var(--W4Py2A);
    --kIWE4w: var(--8ZV4pQ);
    --pEaZCQ: var(--kIWE4w);
  }
}

@media (min-width: 900px){
  .JyB_vw {
    --p-96Ng: var(--5fyqfQ);
    --NHvgCg: var(--p-96Ng);
    --KCdKVw: var(--W4Py2A);
    --VzEstg: var(--KCdKVw);
    --oSM_2A: var(--kIWE4w);
    --pEaZCQ: var(--oSM_2A);
  }
}

.aYjaiA {
  float: right;
  width: auto;
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
  font-family: Canva Sans,Noto Sans Variable,Noto Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;
  font-variation-settings: "opsz" 0;
  font-weight: 400;
  margin: 0;
  overflow-wrap: break-word;
}

.fFOiLQ {
  font-size: calc(var(.1rem, .1rem)*14);
  line-height: calc(var(.1rem, .1rem)*22);
}

.Qkd66A > ._38oWvQ  {
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cwOZMg > ._38oWvQ  {
  margin: auto;
}

.uRvRjQ > ._38oWvQ  {
  transition: opacity .15s ease-in-out;
}

.KiK9Aw > svg  {
  display: block;
  height: 100%;
  width: 100%;
}

.ath32g {
  pointer-events: auto;
}

.yYw_FA {
  box-sizing: border-box;
  flex: 1 1;
  min-width: 0;
}

.Zxv8Qg {
  flex: 0 0 auto;
}

.JyB_vw > .yYw_FA  {
  padding-left: var(--pEaZCQ);
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

.NhroPg {
  display: flex;
  margin-right: 8px;
  white-space: normal;
}

._1m_n5g {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

._8F9l5A ._1m_n5g  {
  padding: 8px 12px;
}

.bpyLaw {
  box-sizing: border-box;
  height: 1px;
  overflow: hidden;
  padding: 1px 0 0 1px;
  position: absolute;
  width: 1px;
}

._5RSqIg {
  word-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smooth: always;
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  text-size-adjust: none;
  font-family: Canva Sans,Noto Sans Variable,Noto Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;
  font-variation-settings: "opsz" 0;
  font-weight: 400;
  margin: 0;
  overflow-wrap: break-word;
}

._5RSqIg {
  font-size: calc(var(.1rem, .1rem)*12);
  line-height: calc(var(.1rem, .1rem)*20);
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

.k3zO6A {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.NA_Img {
  height: 24px;
  width: 24px;
}

.dkWypw > svg  {
  display: block;
  height: 100%;
  width: 100%;
}

.h_D62A {
  display: flex;
  flex-direction: column;
}

.XDkc_A {
  position: relative;
}

.CyZb_A {
  flex-grow: 1;
  margin-left: 16px;
  margin-right: 8px;
  overflow: hidden;
  text-align: start;
}

.BZeNgw {
  height: 100%;
}

._pFsfA {
  clip: rect(1px,1px,1px,1px);
  border: 0;
  font-size: 0;
  height: 1px;
  left: 0;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 1px;
}

.U_zw_w {
  flex-shrink: 0;
}

.ovm4pQ {
  cursor: pointer;
  text-decoration: underline;
}

.ovm4pQ {
  color: var(---8UyGw);
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
  margin-left: calc(var(--aGX6Gw)*-1);
  margin-top: calc(var(--aGX6Gw)*-1);
}

@media (min-width: 600px){
  .YTRpDQ {
    --tIlGkw: var(--cgyfzQ);
    --IdRB7g: var(--tIlGkw);
    --AL11aA: var(--_nyLbw);
    --gREU_A: var(--AL11aA);
    --Mym05Q: var(--4oFB4A);
    --aGX6Gw: var(--Mym05Q);
  }
}

@media (min-width: 900px){
  .YTRpDQ {
    --IOB5jg: var(--tIlGkw);
    --IdRB7g: var(--IOB5jg);
    --GuzVEQ: var(--AL11aA);
    --gREU_A: var(--GuzVEQ);
    --cHht5Q: var(--Mym05Q);
    --aGX6Gw: var(--cHht5Q);
  }
}

.RMcv3A {
  color: var(--VNXpSw);
}

.GHIRjw {
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.r7sYbA {
  min-width: 0;
  pointer-events: auto;
}

.YTRpDQ > .r7sYbA  {
  margin-left: var(--aGX6Gw);
  margin-top: var(--aGX6Gw);
}

.VXdYCg {
  border-radius: 9999px;
}

.RAIBAQ {
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(to bottom right,#03a5ab,#8b3dff);
}

.ro9yvw {
  flex: none;
  font-size: calc(var(--QDqQig)*.5);
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
  font-family: Canva Sans,Noto Sans Variable,Noto Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;
  overflow: hidden;
}

.CCfw7w {
  color: inherit;
}

:deep(.ant-drawer-content){
  background-color:var(--reaicc-meta-theme-post-color);
}

</style>
