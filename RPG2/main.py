import os
import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QWidget, QVBoxLayout, QPushButton, QLabel, QFileDialog, QMessageBox
from svgpathtools import svg2paths, wsvg
from fontTools.ttLib import TTFont

class FontCreatorApp(QMainWindow):
    def __init__(self):
        super().__init__()
        self.initUI()

    def initUI(self):
        self.setWindowTitle("SVG to TTF Font Creator")
        self.setGeometry(100, 100, 400, 200)

        self.central_widget = QWidget()
        self.setCentralWidget(self.central_widget)

        self.layout = QVBoxLayout()

        self.btn_select_svg = QPushButton("Select SVG Files")
        self.btn_select_svg.clicked.connect(self.selectSVGFiles)
        self.layout.addWidget(self.btn_select_svg)

        self.btn_create_font = QPushButton("Create TTF Font")
        self.btn_create_font.clicked.connect(self.createFont)
        self.layout.addWidget(self.btn_create_font)

        self.status_label = QLabel("")
        self.layout.addWidget(self.status_label)

        self.central_widget.setLayout(self.layout)

    def selectSVGFiles(self):
        self.svg_files, _ = QFileDialog.getOpenFileNames(self, "Select SVG Files", filter="SVG Files (*.svg)")
        if self.svg_files:
            self.status_label.setText(f"Selected {len(self.svg_files)} SVG files")

    def createFont(self):
        if not self.svg_files:
            QMessageBox.warning(self, "Warning", "No SVG files selected.")
            return

        font = TTFont()

        for svg_file in self.svg_files:
            glyph_name = os.path.splitext(os.path.basename(svg_file))[0]
            paths, _ = svg2paths(svg_file)
            wsvg(paths, filename=f'{glyph_name}.svg')
            glyph = paths[0]
            font['glyf'][glyph_name] = glyph
            font['cmap'].setCharGlyphId(ord(glyph_name), glyph_name)

        font.save("output_font.ttf")
        self.status_label.setText("TTF Font created successfully.")

if __name__ == '__main__':
    app = QApplication(sys.argv)
    window = FontCreatorApp()
    window.show()
    sys.exit(app.exec_())
