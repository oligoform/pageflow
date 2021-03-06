json.call(video_file, :width, :height, :duration_in_ms)
json.created_at video_file.created_at.try(:utc).try(:iso8601, 0)

variants = (video_file.present_outputs + [:poster_medium, :poster_large, :poster_ultra, :print])

# Use JBuilder's private _key method to use format variants according
# to current key format (camel case/underscored). This ensures
# variants are consistent with the keys generated by
# ConfigHelper#config_file_url_templates_seed.
json.variants(variants.map { |varaint| json.__send__(:_key, varaint) })
