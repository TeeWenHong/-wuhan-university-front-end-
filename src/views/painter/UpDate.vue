<!-- <template>
  <div>
    <canvas ref="pdfCanvas"></canvas>
  </div>
</template>

<script>
import DocxToPdf from 'docx-to-pdf';
import pdfjsLib from 'pdfjs-dist';

export default {
  async convertDocToPdf(pdfUrl) {
    const docxToPdf = new DocxToPdf();
    const pdfArray = await docxToPdf.convertFile(pdfUrl);
    const pdfData = new Uint8Array(pdfArray);
    const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
    const pdfUrl = URL.createObjectURL(pdf);
    return pdfUrl;
  },
  mounted() {
    // 获取你想要预览的 PDF 文件的 URL
    const pdfUrl = 'C:\\Users\\Huawei\\Desktop\\img\\1.docx';

    // 获取 canvas 元素
    const canvas = this.$refs.pdfCanvas;

    // 设置 PDF 渲染参数
    const renderOptions = {
      canvasContext: canvas.getContext('2d'),
      viewport: null // 这个后面会设置
    };

    // 异步加载 PDF 文件
    pdfjsLib.getDocument(pdfUrl).promise
      .then(pdf => {
        // 获取第一页
        return pdf.getPage(1);
      })
      .then(page => {
        // 根据当前 canvas 的宽高计算出 PDF 页面的视口大小
        const viewport = page.getViewport({scale: 1});
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        renderOptions.viewport = viewport;

        // 渲染页面
        return page.render(renderOptions);
      })
      .catch(error => {
        console.error(error);
      });
  }
};


</script>

<style>

</style> -->
