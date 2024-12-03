#!/bin/bash

# Install required tools if not present
if ! command -v cwebp &> /dev/null; then
    echo "Installing WebP tools..."
    sudo apt-get update
    sudo apt-get install -y webp
fi

if ! command -v jpegoptim &> /dev/null; then
    echo "Installing JPEG optimization tools..."
    sudo apt-get install -y jpegoptim
fi

if ! command -v optipng &> /dev/null; then
    echo "Installing PNG optimization tools..."
    sudo apt-get install -y optipng
fi

# Function to process images
process_images() {
    local dir="$1"
    
    # Process each file in the current directory
    for img in "$dir"/*; do
        if [ -f "$img" ]; then
            # Get file extension (lowercase)
            ext=$(echo "${img##*.}" | tr '[:upper:]' '[:lower:]')
            
            # Get filename without extension
            filename=$(basename "$img" ."$ext")
            
            # Check if this is an image we should process
            if [[ "$ext" != "jpg" && "$ext" != "jpeg" && "$ext" != "png" ]]; then
                continue  # Skip non-image files
            fi
            
            # Check if WebP version already exists
            if [ -f "${dir}/${filename}.webp" ]; then
                echo "Skipping ${img} - WebP version already exists"
                continue
            fi
            
            echo "Processing: $img"
            case "$ext" in
                jpg|jpeg)
                    # Optimize JPEG
                    jpegoptim --max=80 --strip-all --all-progressive "$img"
                    # Convert to WebP
                    cwebp -q 80 "$img" -o "${dir}/${filename}.webp"
                    ;;
                png)
                    # Optimize PNG
                    optipng -o5 "$img"
                    # Convert to WebP
                    cwebp -q 80 "$img" -o "${dir}/${filename}.webp"
                    ;;
            esac
            
            echo "Created: ${dir}/${filename}.webp"
            
        elif [ -d "$img" ] && [[ "$img" != *"temp_processed"* ]]; then
            # Recursively process subdirectories
            process_images "$img"
        fi
    done
}

# Start processing from public/images directory
if [ -d "public/images" ]; then
    echo "Starting image optimization..."
    process_images "public/images"
    echo "Done! New WebP images have been created alongside original files"
else
    echo "Error: public/images directory not found!"
    exit 1
fi 