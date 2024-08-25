<template>
  <div class="content-grid">
    <div class="content-view">
      <div class="table-page">
        <GiTable
            row-key="id"
            title="存储管理"
            :data="dataList"
            :columns="columns"
            :loading="loading"
            :scroll="{ x: '100%', y: '100%', minWidth: 1300 }"
            :pagination="pagination"
            :disabled-tools="['size']"
            :disabled-column-keys="['name']"
            @refresh="search"
        >
          <template #custom-left>
            <arco-input v-model="queryForm.description" placeholder="请输入关键词" allow-clear @change="search">
              <template #prefix><icon-search /></template>
            </arco-input>
            <arco-select
                v-model="queryForm.status"
                :options="DisEnableStatusList"
                placeholder="请选择状态"
                allow-clear
                style="width: 150px"
                @change="search"
            />
            <arco-button @click="reset">重置</arco-button>
          </template>
          <template #custom-right>
            <!--     v-permission="['system:storage:add']"   -->
            <arco-button  type="primary" @click="onAdd">
              <template #icon><icon-plus /></template>
              <span>新增</span>
            </arco-button>
          </template>
          <template #name="{ record }">
            <arco-space fill>
              <span>{{ record.name }}</span>
              <arco-tag v-if="record.isDefault" color="arcoblue" size="small" class="gi_round">
                <template #default>默认</template>
              </arco-tag>
            </arco-space>
          </template>
          <template #type="{ record }">
            <!--     :dict="storage_type_enum"    -->
            <!--        <GiCellTag :value="record.type" />-->
          </template>
          <template #status="{ record }">
            <GiCellStatus :status="record.status" />
          </template>
          <template #action="{ record }">
            <arco-space>
              <!--      v-permission="['system:storage:update']"     -->
              <arco-link @click="onUpdate(record)">修改</arco-link>
              <!--       v-permission="['system:storage:delete']"   -->
              <arco-link
                  status="danger"
                  :title="record.isDefault ? '默认存储不能删除' : undefined"
                  :disabled="record.disabled"
                  @click="onDelete(record)"
              >
                删除
              </arco-link>
            </arco-space>
          </template>
        </GiTable>

        <StorageAddDrawer ref="StorageAddDrawerRef" @save-success="search" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import StorageAddDrawer from './StorageAddDrawer.vue'
import { type StorageQuery, type StorageResp, deleteStorage, listStorage } from '@/api'
import type { TableInstanceColumns } from '@/views/system/compontents/GiTable/type'
import { useTable } from '@/hooks'
// import { useDict } from '@/hooks/app'
import { isMobile } from '@/utils'
import has from '@/utils/has'
import { DisEnableStatusList } from '@/constant/common'
import GiTable from '@/views/system/compontents/GiTable/index.vue'
import GiCellTag from '@/views/system/compontents/GiCell/GiCellTags.vue'
import GiCellStatus from '@/views/system/compontents/GiCell/GiCellStatus.vue'

defineOptions({ name: 'SystemStorage' })

// const { storage_type_enum } = useDict('storage_type_enum')

const queryForm = reactive<StorageQuery>({})

const {
  tableData: dataList,
  loading,
  pagination,
  search,
  handleDelete
} = useTable((page) => listStorage({ ...queryForm, ...page }), { immediate: true })

const formatDate = (timestamp) => {
  const date = new Date(timestamp); // 将时间戳转换为日期对象
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`; // 格式化日期
};
const columns: TableInstanceColumns[] = [
  {
    title: '序号',
    width: 66,
    align: 'center',
    render: ({ rowIndex }) => h('span', {}, rowIndex + 1 + (pagination.current - 1) * pagination.pageSize)
  },
  { title: '名称', dataIndex: 'name', slotName: 'name', width: 140, ellipsis: true, tooltip: true },
  { title: '编码', dataIndex: 'code', ellipsis: true, tooltip: true },
  { title: '状态', slotName: 'status', align: 'center' },
  { title: '类型', slotName: 'type', align: 'center' },
  { title: '访问密钥', dataIndex: 'accessKey', ellipsis: true, tooltip: true },
  { title: '终端节点', dataIndex: 'endpoint', ellipsis: true, tooltip: true },
  { title: '桶名称', dataIndex: 'bucketName', ellipsis: true, tooltip: true },
  { title: '域名', dataIndex: 'domain', ellipsis: true, tooltip: true },
  { title: '描述', dataIndex: 'description', ellipsis: true, tooltip: true },
  { title: '创建人', dataIndex: 'createUserString', ellipsis: true, tooltip: true, show: false },
  { title: '创建时间', dataIndex: 'createTime', width: 180,
    render: ({ record }) => h('span', {}, formatDate(record.createTime))},
  { title: '修改人', dataIndex: 'updateUserString', ellipsis: true, tooltip: true, show: false },
  { title: '修改时间', dataIndex: 'updateTime', width: 180, show: false },
  {
    title: '操作',
    slotName: 'action',
    width: 130,
    align: 'center',
    fixed: !isMobile() ? 'right' : undefined,
    show: has.hasPermOr(['system:storage:update', 'system:storage:delete'])
  }
]

// 重置
const reset = () => {
  queryForm.description = undefined
  queryForm.status = undefined
  search()
}

// 删除
const onDelete = (record: StorageResp) => {
  return handleDelete(() => deleteStorage(record.storageId), { content: `是否确定删除存储 [${record.name}]？`, showModal: true })
}

const StorageAddDrawerRef = ref<InstanceType<typeof StorageAddDrawer>>()
// 新增
const onAdd = () => {
  StorageAddDrawerRef.value?.onAdd()
}

// 修改
const onUpdate = (record: StorageResp) => {
  console.log(record)
  StorageAddDrawerRef.value?.onUpdate(record.storageId)
}
</script>

<style lang="scss" scoped></style>
