import numpy as np
from PIL import Image
import base64
from io import BytesIO

# 이미지 크기 설정
width, height = 100, 100

# 불규칙한 픽셀 생성
pixels = np.random.randint(0, 256, (height, width, 3), dtype=np.uint8)

# 이미지 생성
image = Image.fromarray(pixels)

# 이미지를 메모리 파일에 저장
buffered = BytesIO()
image.save(buffered, format="PNG")

# 이미지를 base64로 인코딩
img_str = base64.b64encode(buffered.getvalue()).decode()

# 이미지 파일 저장
image.save("/mnt/data/random_pixel_image.png")

# base64 인코딩된 이미지 데이터
img_str
